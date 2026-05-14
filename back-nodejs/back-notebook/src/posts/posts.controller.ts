import { Body, Controller, HttpException, HttpStatus, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { RoleValues } from 'src/consts/role-values';
import { ReciveCreatePostDto } from './dto/recive-create-post.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as ResponcePost } from './posts.model';

@ApiTags('Посты пользователей')
@Controller('posts')
export class PostsController {

    constructor(private postrService: PostsService ){}

    @Roles(RoleValues.USER)
    @UseGuards(RolesGuard)
    @ApiResponse({status: 200, type: [ResponcePost]})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost( @Req() request: Request,
                @Body() dto: ReciveCreatePostDto,
                @UploadedFile() image) {

        
        if (!request['user']) {
            throw new HttpException('Пользователь не выполнил вход', HttpStatus.FORBIDDEN);
        }

        return this.postrService.createPost({ ...dto, userId: request['user'].id }, image);
    }
}
