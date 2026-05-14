import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ReciveCreatePostDto {

    @IsString({ message: 'Должно быть строкой'})
    @ApiProperty({example: 'Какой-то пост', description: 'Значение заголовка поста'})
    readonly title!: string;

    @IsString({ message: 'Должно быть строкой'})
    @ApiProperty({example: 'Какой-то контент', description: 'Значение контента поста'})
    readonly content!: string;
}