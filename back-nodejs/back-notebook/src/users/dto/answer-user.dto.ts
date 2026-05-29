import { ApiProperty } from "@nestjs/swagger";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { Schedule } from "src/schedules/schedules.model";

export class AnswerUserDto {
    @ApiProperty({example: '111', description: 'Идентификатор пользователя'})
    id!: number;
    
    @ApiProperty({example: 'some-mail@some-server.tt', description: 'Почта пользователя'})
    email!: string;
    
    @ApiProperty({example: 'false', description: 'Признак блокировки пользователя'})
    banned!: boolean;
    
    @ApiProperty({example: 'Блокирован потому что плохо вел себя', description: 'Причина блокировки пользователя'})
    banReason!: string;
    
    @ApiProperty({example: '[]', description: 'Роли пользователя'})
    roles!: Role[];
    
    @ApiProperty({example: '[]', description: 'Посты пользователя'})
    posts!: Post[];
    
    @ApiProperty({example: '[]', description: 'Записи расписания пользователя'})
    schedules!: Schedule[];
}