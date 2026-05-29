import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, HasOne, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Client } from "src/clients/clients.model";
import { User } from "src/users/users.model";

interface ScheduleCteationAttrs {
    
    date: Date;    
    beginTime: string;
    endTime: string;
    userId: number;
    clientId: number;
    
}

@Table({tableName: 'schedules'})
export class Schedule extends Model<Schedule, ScheduleCteationAttrs> {

    @ApiProperty({example: '1', description: 'Идентификатор расписания'})
    @PrimaryKey
    @AutoIncrement
    @Unique(true)
    @Column(DataType.INTEGER)
    declare id: number;

    @ApiProperty({example: '2026-05-20', description: 'Дата расписания'})
    // @Unique(true)
    @AllowNull(false)
    @Column(DataType.DATEONLY)
    date!: Date;

    @ApiProperty({example: '08:00', description: 'Время начала'})
    @AllowNull(false)
    @Column(DataType.STRING)
    beginTime!: string;

    @ApiProperty({example: '09:30', description: 'Время окончания'})
    @AllowNull(false)
    @Column(DataType.STRING)
    endTime!: string;

    @ApiProperty({example: '111', description: 'Идентификатор пользователя'})
    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number;

    @ApiProperty({example: '123', description: 'Идентификатор клиента'})
    @AllowNull(false)
    @ForeignKey(() => Client)
    @Column(DataType.INTEGER)
    clientId!: number;

    @ApiProperty({example: 'false', description: 'Признак удаления расписания'})
    @Default(false)
    @Column(DataType.BOOLEAN)
    isDeleted!: boolean;

    
    @BelongsTo(() => User)
    user!: User;
    
    @BelongsTo(() => Client)
    client!: Client;
}