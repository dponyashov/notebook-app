import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
    
    @IsNumber( {}, { message: 'Должно быть числом'})
    @ApiProperty({example: '111', description: 'Идентификатор пользователя'})
    readonly userId!: number;

    @IsString( { message: 'Должно быть строкой' } )
    @ApiProperty({example: 'Потому что хулиган', description: 'Причина блокировки пользователя'})
    readonly banReason!: string;
}