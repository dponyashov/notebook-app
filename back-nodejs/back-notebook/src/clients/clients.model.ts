import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, Column, DataType, Default, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

interface ClientCteationAttrs {
    
    name: string;    
    phone: string;
    description: string;
    
}

@Table({tableName: 'clients'})
export class Client extends Model<Client, ClientCteationAttrs> {

    @ApiProperty({example: '1', description: 'Идентификатор клиента'})
    @PrimaryKey
    @AutoIncrement
    @Unique(true)
    @Column(DataType.INTEGER)
    declare id: number;

    @ApiProperty({example: 'Иванов Иван Иваныч', description: 'Имя клиента'})
    @Unique(true)
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @ApiProperty({example: '+7(999)888-77-66', description: 'Телефон клиента'})
    @AllowNull(false)
    @Column(DataType.STRING)
    phone!: string;

    @ApiProperty({example: 'Какой-то текст описания клиента', description: 'Описание клиента'})
    @AllowNull(true)
    @Column(DataType.STRING)
    description!: string;

    @ApiProperty({example: 'false', description: 'Признак удаления клиента'})
    @Default(false)
    @Column(DataType.BOOLEAN)
    isDeleted!: boolean;
}