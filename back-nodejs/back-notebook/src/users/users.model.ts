import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";


interface UserCteationAttrs {
    
    email: string;
    
    password: string;
}


@Table({tableName: 'users'})
export class User extends Model<User, UserCteationAttrs> {

    @ApiProperty({example: '1', description: 'Идентификатор пользователя'})
    @PrimaryKey
    @AutoIncrement
    @Unique(true)
    @Column(DataType.INTEGER)
    declare id: number;

    @ApiProperty({example: 'some-mail@some-server.tt', description: 'Почта пользователя'})
    @Unique(true)
    @AllowNull(false)
    @Column(DataType.STRING)
    email!: string;

    @ApiProperty({example: 'Qwerty123', description: 'Пароль пользователя'})
    @AllowNull(false)
     @Column(DataType.STRING)
    password!: string;

    @ApiProperty({example: 'false', description: 'Признак блокировки пользователя'})
    @Default(false)
    @Column(DataType.BOOLEAN)
    banned!: boolean;

    @ApiProperty({example: 'Блокирован потому что плохо вел себя', description: 'Причина блокировки пользователя'})
    @AllowNull(true)
    @Column(DataType.STRING)
    banReason!: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles!: Role[];

    @HasMany(() => Post)
    declare posts: Post[];

}