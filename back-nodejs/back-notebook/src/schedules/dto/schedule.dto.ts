import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsMilitaryTime, IsNumber, IsString } from "class-validator";

export class ScheduleDto {

    @IsDate({ message: 'Должно быть датой'})
    @Type(() => Date)
    @ApiProperty({example: '2026-05-20', description: 'Дата записи расписания'})    
    readonly date!: Date;

    // @IsString({ message: 'Должно быть строкой в формате 00:00'})
    @IsMilitaryTime({ message: 'Должно быть строкой в формате 00:00'})
    @ApiProperty({example: '08:00', description: 'Время начала'})
    readonly beginTime!: string;

    // @IsString({ message: 'Должно быть строкой в формате 00:00'})
    @IsMilitaryTime({ message: 'Должно быть строкой в формате 00:00'})
    @ApiProperty({example: '09:45', description: 'Время окончания'})
    readonly endTime!: string;

    @IsNumber({}, { message: 'Должно быть числом' })
    @ApiProperty({example: '111', description: 'Идентификатор пользователя'})
    readonly userId!: number;

    @IsNumber({}, { message: 'Должно быть числом' })
    @ApiProperty({example: '123', description: 'Идентификатор колиента'})
    readonly clientId!: number;
}