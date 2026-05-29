import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ScheduleDto } from './dto/schedule.dto';
import { Schedule } from './schedules.model';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { AnswerScheduleDto } from './dto/answer-schedule.dto';
import { ScheduleMapper } from 'src/mappers/schedule-mapper';
import { Op, Utils } from 'sequelize';
import { DateTimeUtils } from 'src/utils/utils';

@Injectable()
export class SchedulesService {

    constructor(@InjectModel(Schedule) private scheduleRepository: typeof Schedule,
                                       private userService: UsersService){}

    async create( dto: ScheduleDto) {

        const paramsIsChecked = await this.checkScheduleParams(dto);

        if ( !paramsIsChecked ) {
            throw new HttpException('Неверные параметры в записи расписания', HttpStatus.BAD_REQUEST);
        }

        const newSchedule = await this.scheduleRepository.create( dto );
        return await this.findById(newSchedule.id);

    }

    async update(id: number, dto: ScheduleDto) {
        const oldSchedule = await this.scheduleRepository.findByPk(id);
        if (!oldSchedule){
            throw new HttpException('Не найдена запись расписния', HttpStatus.NOT_FOUND);
        }

        const paramsIsChecked = await this.checkScheduleParams(dto, id);

        if ( !paramsIsChecked ) {
            throw new HttpException('Неверные параметры в записи расписания', HttpStatus.BAD_REQUEST);
        }

        const [affectedCount] = await this.scheduleRepository.update(
            { 
                date: dto.date,
                beginTime: dto.beginTime,
                endTime: dto.endTime,
                userId: dto.userId,
                clientId: dto.clientId 
            }, // Поля для обновления
            { where: { id } }  // Условие поиска
        );
        if ( affectedCount > 0 ) {
            return this.findById(id);
        }        
    }

    async delete(id: number) {
        const oldSchedule = await this.scheduleRepository.findByPk(id);
        if (!oldSchedule){
            throw new HttpException('Не найдена запись расписния', HttpStatus.NOT_FOUND);
        }

        return await oldSchedule.destroy();
    }

    async findAll() {
        const schedules = await this.scheduleRepository.findAll({ 
            include: { all: true }
        });

        const scheduleResponse = schedules.map( schedule => {
            const answerSchedule: AnswerScheduleDto = ScheduleMapper.entityToDto(schedule);
            return answerSchedule;
        });

        return scheduleResponse;
    }

    async findAllByClientId(id: number) {
        const schedules = await this.scheduleRepository.findAll({ 
            include: { all: true },
            where: {
                clientId: id
            }
        });

        const scheduleResponse = schedules.map( schedule => {
            const answerSchedule: AnswerScheduleDto = ScheduleMapper.entityToDto(schedule);
            return answerSchedule;
        });

        return scheduleResponse;
    }

    async findAllByUserId(id: number) {
        const schedules = await this.scheduleRepository.findAll({ 
            include: { all: true },
            where: {
                userId: id
            }
        });

        const scheduleResponse = schedules.map( schedule => {
            const answerSchedule: AnswerScheduleDto = ScheduleMapper.entityToDto(schedule);
            return answerSchedule;
        });

        return scheduleResponse;
    }

    async findAllByDate(date: Date) {
        const schedules = await this.scheduleRepository.findAll({ 
            include: { all: true },
            where: {
                date: date
            }
        });

        const scheduleResponse = schedules.map( schedule => {
            const answerSchedule: AnswerScheduleDto = ScheduleMapper.entityToDto(schedule);
            return answerSchedule;
        });

        return scheduleResponse;
    }

    async findById(id: number) {
        const schedule = await this.scheduleRepository.findByPk(id, { 
            include: {all: true}
        });
        if( !schedule ){
            throw new HttpException('Запись расписания не найдена', HttpStatus.NOT_FOUND);
        }

        return ScheduleMapper.entityToDto(schedule);
    }

    private async checkScheduleParams(dto: ScheduleDto, checkedId: number = -1): Promise<boolean> {

        const startTime = DateTimeUtils.stringTimeToNumber(dto.beginTime);
        const endTime = DateTimeUtils.stringTimeToNumber(dto.endTime);

        if ( startTime >= endTime ) {
            throw new HttpException('Время начала должно быть раньше время окончания', HttpStatus.BAD_REQUEST);
        }

        // проверяем пересечение по времени в разрезе пользователя
        const userSchedules =  await this.scheduleRepository.findAll({
            where: {                
                id: {
                    [Op.ne]: checkedId,
                },
                userId: dto.userId,
                date: dto.date
            }
        });

        if(userSchedules) {
            const timeCheckUserInterval = userSchedules.find((schedule) => {

                const beginTime = schedule.dataValues.beginTime;
                const endTime = schedule.dataValues.endTime;

                return ( dto.beginTime === beginTime && dto.endTime === endTime ) //Определяем точное совпадение интервала
                    || this.dateBetweenInterval( dto.beginTime, beginTime, endTime )
                    || this.dateBetweenInterval( dto.endTime, beginTime, endTime )
                    || this.dateBetweenInterval( beginTime, dto.beginTime, dto.endTime )
                    || this.dateBetweenInterval( endTime, dto.beginTime, dto.endTime )
            });
            if (timeCheckUserInterval) {
                throw new HttpException('Пользователь занят на этот период времени', HttpStatus.BAD_REQUEST);
            }
        }

        // проверяем пересечение в разрезе клиента
        const clientSchedules = await this.scheduleRepository.findAll({
            where: {
                id: {
                    [Op.ne]: checkedId,
                },
                clientId: dto.clientId,
                date: dto.date
            }
        });

        if (clientSchedules) {
            const timeCheckClientInterval = clientSchedules.find((schedule) => {
                const beginTime = schedule.dataValues.beginTime;
                const endTime = schedule.dataValues.endTime;

                return ( dto.beginTime === beginTime && dto.endTime === endTime ) //Определяем точное совпадение интервала
                    || this.dateBetweenInterval( dto.beginTime, beginTime, endTime )
                    || this.dateBetweenInterval( dto.endTime, beginTime, endTime )
                    || this.dateBetweenInterval( beginTime, dto.beginTime, dto.endTime )
                    || this.dateBetweenInterval( endTime, dto.beginTime, dto.endTime )
            });
            if (timeCheckClientInterval) {
                throw new HttpException('Клиент уже записан на этот период времени', HttpStatus.BAD_REQUEST);
            }
        }

        return true;
    }

    private dateBetweenInterval(checkedTime: string, startInterval: string, endInterval: string): boolean {

        if (!DateTimeUtils.stringIsTime(checkedTime) ) {
            return false;
        }
        if (!DateTimeUtils.stringIsTime(startInterval) ) {
            return false;
        }
        if (!DateTimeUtils.stringIsTime(endInterval) ) {
            return false;
        }

        const checkedValue = DateTimeUtils.stringTimeToNumber(checkedTime);
        const startValue = DateTimeUtils.stringTimeToNumber(startInterval);
        const endValue = DateTimeUtils.stringTimeToNumber(endInterval);


        const isChecked = ((startValue + 1) < checkedValue && checkedValue < (endValue - 1));

        console.log(`${startInterval} < ${checkedTime} < ${endInterval} - `, isChecked);

        return isChecked;
    }
}




