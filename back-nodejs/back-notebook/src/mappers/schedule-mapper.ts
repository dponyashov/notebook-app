import { AnswerScheduleDto } from "src/schedules/dto/answer-schedule.dto";
import { Schedule } from "src/schedules/schedules.model";
import { UserMapper } from "./user-mapper";

export class ScheduleMapper {

    static entityToDto(ent: Schedule): AnswerScheduleDto {

        // console.log('ScheduleMapper.entityToDto - ent.dataValues.user:', ent.dataValues.user)

        const answerSchedule: AnswerScheduleDto = { ...ent.dataValues,
            user: UserMapper.entityToDto(ent.dataValues.user)
        }

        return answerSchedule;
    }
}