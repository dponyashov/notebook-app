import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './roles.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { RoleValues } from 'src/consts/role-values';

@ApiTags('Роли пользователя')
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: Role})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create (@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }
    
    @ApiOperation({summary: 'Роль по значению'})
    @ApiResponse({status: 200, type: Role})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }

    @ApiOperation({summary: 'Список ролей'})
    @ApiResponse({status: 200, type: Role})
    @Roles(RoleValues.ADMIN)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.roleService.getRoles();
    }
}
