import { AnswerUserDto } from "src/users/dto/answer-user.dto";
import { User } from "src/users/users.model";

export class UserMapper {

    static entityToDto(ent: User): AnswerUserDto {

        // console.log('UserMapper.entityToDto - ent', ent);
        
        const answerUser: AnswerUserDto  = //Object.assign(new AnswerUserDto(), ent.dataValues);

        {
            id: ent.dataValues.id,
            email: ent.dataValues.email,
            banned: ent.dataValues.banned,
            banReason: ent.dataValues.banReason,
            roles: ent.dataValues.roles,
            posts: ent.dataValues.posts,
            schedules: ent.dataValues.schedules,
        }            

        // console.log('UserMapper.entityToDto - answerUser', answerUser);
        
        return answerUser;
    }
}