import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { ReciveCreatePostDto } from "./recive-create-post.dto";

export class CreatePostDto extends ReciveCreatePostDto {

    @IsNumber( {}, { message: 'Должно быть числом' })
    @ApiProperty({example: '111', description: 'Идентификатор пользователя'})
    readonly userId!: number;
}