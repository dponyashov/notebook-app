import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {

    @IsString({ message: 'Должно быть строкой'})
    @ApiProperty({example: 'ADMIN', description: 'Значение роли пользователя'})
    readonly value: string;

    @IsString({ message: 'Должно быть строкой'})
    @ApiProperty({example: 'Администратор', description: 'Описание роли пользователя'})
    readonly description: string;
}