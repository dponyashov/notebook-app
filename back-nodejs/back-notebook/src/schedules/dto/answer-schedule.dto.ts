import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsMilitaryTime, IsNumber, IsString } from "class-validator";
import { ScheduleDto } from "./schedule.dto";
import { AnswerUserDto } from "src/users/dto/answer-user.dto";
import { Client } from "src/clients/clients.model";

export class AnswerScheduleDto extends ScheduleDto {

    // @IsNumber({}, { message: 'Должно быть числом' })
    @ApiProperty({example: '{}', description: 'Данные пользователя'})
    user!: AnswerUserDto;

    // @IsNumber({}, { message: 'Должно быть числом' })
    @ApiProperty({example: '{}}', description: 'Данные колиента'})
    client!: Client;
}