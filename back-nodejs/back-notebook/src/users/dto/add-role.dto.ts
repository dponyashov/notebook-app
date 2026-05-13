import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {

    @IsString({ message: 'Должно быть строкой'})
    @ApiProperty({example: 'ADMIN', description: 'Значение роли'})
    readonly value: string;
    
    @IsNumber({}, { message: 'Должно быть число'})
    @ApiProperty({example: '111', description: 'Идентификатор пользователя'})
    readonly userId: number;
}