import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString } from "class-validator";

export class CreateClientDto {
    
    @ApiProperty({example: 'Иванова Юлия Петровна', description: 'Имя клиента'})
    @IsString( { message: 'Должно быть строкой' } )
    readonly name: string;

    @ApiProperty({example: '+7(999) 111-22-33', description: 'Телефон клиента'})
    @IsString( { message: 'Должно быть строкой' } )
    @IsPhoneNumber()
    readonly phone: string;

    @ApiProperty({example: 'Какое-то описание клиента', description: 'Описание клиента'})
    @IsString( { message: 'Должно быть строкой' } )
    readonly description: string;
}