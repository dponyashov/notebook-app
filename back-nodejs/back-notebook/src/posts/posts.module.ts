import { forwardRef, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './posts.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports:[
    SequelizeModule.forFeature([
      Post
    ]),
    forwardRef( () => AuthModule ),
    FilesModule
  ]
})
export class PostsModule {}
