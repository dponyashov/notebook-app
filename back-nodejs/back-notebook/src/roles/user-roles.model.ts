import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    // @ApiProperty({example: '1', description: 'Идентификатор роли'})
    @PrimaryKey
    @AutoIncrement
    @Unique(true)
    @Column(DataType.INTEGER)
    declare id: number;

    // @ApiProperty({example: 'ADMIN', description: 'Значение роли'})
    @ForeignKey(() => Role)
    // @Unique(true)    
    // @AllowNull(false)
    @Column(DataType.INTEGER)
    roleId!: number;

    // @ApiProperty({example: 'ADMIN', description: 'Значение роли'})
    @ForeignKey(() => User)
    // @Unique(true)
    // @AllowNull(false)
    @Column(DataType.INTEGER)
    userId!: number;

}