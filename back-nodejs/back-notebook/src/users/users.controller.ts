import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { RoleValues } from 'src/consts/role-values';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    // @ApiOperation({summary: 'Создание пользователя'})
    // @ApiResponse({status: 200, type: User})
    // @UsePipes(ValidationPipe)
    // @Post()
    // create (@Body() userDto: CreateUserDto) {
    //     return this.userService.createUser(userDto);
    // }

    @ApiOperation({summary: 'Список всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: 'Добавить роль'})
    @ApiResponse({status: 200})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({summary: 'Удалить роль'})
    @ApiResponse({status: 200})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Post('/role-delete')
    deleteRole(@Body() dto: AddRoleDto) {
        return this.userService.deleteRole(dto);
    }

    @ApiOperation({summary: 'Заблокировать пользователя'})
    @ApiResponse({status: 200})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Post('/ban')
    banUser(@Body() dto: BanUserDto) {
        return this.userService.banUser(dto);
    }

    @ApiOperation({summary: 'Разблокировать пользователя'})
    @ApiResponse({status: 200})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Post('/unban')
    unbanUser(@Body() dto: BanUserDto) {
        return this.userService.unbanUser(dto);
    }
}
