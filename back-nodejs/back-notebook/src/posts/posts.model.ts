import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/users/users.model";


interface PostCteationAttrs {
    
    title: string;
    content: string;
    userId: number;
    image: string;
}


@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCteationAttrs> {

    @ApiProperty({example: '1', description: 'Идентификатор поста'})
    @PrimaryKey
    @AutoIncrement
    @Unique(true)
    @Column(DataType.INTEGER)
    declare id: number;

    @ApiProperty({example: 'Какой-то пост', description: 'Заголовок поста'})
    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;

    @ApiProperty({example: 'Какое-то содержание поста', description: 'Содержание поста'})
    @AllowNull(false)
    @Column(DataType.STRING)
    content!: string;

    @ApiProperty({example: 'file_name.jpg', description: 'Имя файла'})
    @AllowNull(true)
    @Column(DataType.STRING)
    image!: string;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number;

    @BelongsTo(() => User)
    author!: User;

}