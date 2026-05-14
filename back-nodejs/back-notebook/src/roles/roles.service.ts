import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {    

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}


    async createRole( dto: CreateRoleDto ) {

        const existRole = await this.roleRepository.findOne({where: {value: dto.value.trim().toUpperCase()}});

        if ( existRole ) {
            throw new HttpException('Роль с таким значением уже существует', HttpStatus.BAD_REQUEST);
        }

        const roleForCreate = { ...dto, value: dto.value.trim().toUpperCase() };
        const role = await this.roleRepository.create(roleForCreate);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}});
        return role;
    }

    async getRoles() {
        return await this.roleRepository.findAll({ include: { all: true }});
    }
}
