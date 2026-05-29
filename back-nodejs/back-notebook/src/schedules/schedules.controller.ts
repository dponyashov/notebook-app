import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SchedulesService } from './schedules.service';
import { Schedule } from './schedules.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RoleValues } from 'src/consts/role-values';
import { RolesGuard } from 'src/auth/roles-guard';
import { ScheduleDto } from './dto/schedule.dto';
import { DateTimeUtils } from 'src/utils/utils';

@Controller('schedules')
export class SchedulesController {
    constructor(private scheduleService: SchedulesService) {}
    
        @ApiOperation({summary: 'Создание записи расписания'})
        @ApiResponse({status: 200, type: Schedule})
        @Roles(RoleValues.SERVICE)
        @UseGuards(RolesGuard)
        @Post()
        create (@Body() scheduleDto: ScheduleDto) {
            return this.scheduleService.create(scheduleDto);
        }

        @ApiOperation({summary: 'Обновление записи расписания'})
        @ApiResponse({status: 200, type: Schedule})
        @Roles(RoleValues.SERVICE)
        @UseGuards(RolesGuard)
        @Put('/:scheduleId')
        update (@Param('scheduleId') id: number, @Body() scheduleDto: ScheduleDto) {
            return this.scheduleService.update(id, scheduleDto);
        }

        @ApiOperation({summary: 'Удаление записи расписания'})
        @ApiResponse({status: 200})
        @Roles(RoleValues.SERVICE)
        @UseGuards(RolesGuard)
        @Delete('/:scheduleId')
        delete (@Param('scheduleId') id: number) {
            return this.scheduleService.delete(id);
        }

        @ApiOperation({summary: 'Все записи расписания'})
        @ApiResponse({status: 200, type: [Schedule]})
        @Roles(RoleValues.SERVICE, RoleValues.ADMIN)
        @UseGuards(RolesGuard)
        @Get()
        findAll(@Query('date') date: string = '') {
            if (!date || date === ''){
                return this.scheduleService.findAll();
            }

            if(!DateTimeUtils.stringIsDate(date)) {
                throw new HttpException('Неыерный формат даты, должен быть (YYYY-MM-DD)', HttpStatus.BAD_REQUEST)
            }

            return this.scheduleService.findAllByDate(new Date(date));
        }

        @ApiOperation({summary: 'Все записи расписания для пользователя'})
        @ApiResponse({status: 200, type: [Schedule]})
        @Roles(RoleValues.SERVICE, RoleValues.ADMIN)
        @UseGuards(RolesGuard)
        @Get('/user/:userId')
        findAllByUser (@Param('userId') id: number) {
            return this.scheduleService.findAllByUserId(id);
        }

        @ApiOperation({summary: 'Все записи расписания для клиента'})
        @ApiResponse({status: 200, type: [Schedule]})
        @Roles(RoleValues.SERVICE, RoleValues.ADMIN)
        @UseGuards(RolesGuard)
        @Get('/client/:clientId')
        findAllByClient (@Param('clientId') id: number) {
            return this.scheduleService.findAllByClientId(id);
        }

        @ApiOperation({summary: 'Запись расписания по идентификатору'})
        @ApiResponse({status: 200, type: Schedule})
        @Roles(RoleValues.SERVICE, RoleValues.ADMIN)
        @UseGuards(RolesGuard)
        @Get('/:id')
        findById (@Param('id') id: number) {
            return this.scheduleService.findById(id);
        }
}
