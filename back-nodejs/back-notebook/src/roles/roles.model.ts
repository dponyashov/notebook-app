import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";


interface RoleCteationAttrs {
    
    value: string;
    
    description: string;
}


@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCteationAttrs> {

    @ApiProperty({example: '1', description: 'Идентификатор роли'})
    @PrimaryKey
    @AutoIncrement
    @Unique(true)
    @Column(DataType.INTEGER)
    declare id: number;

    @ApiProperty({example: 'ADMIN', description: 'Значение роли'})
    @Unique(true)
    @AllowNull(false)
    @Column(DataType.STRING)
    value!: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @AllowNull(false)
    @Column(DataType.STRING)
    description!: string;

    @BelongsToMany(() => User, () => UserRoles)
    users!: User[];

}