import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './clients.model';

@Injectable()
export class ClientsService {

    constructor(@InjectModel(Client) private clientRepository: typeof Client){}

    async findAll() {
        return await this.clientRepository.findAll({include: {all: true}, where:{isDeleted: false}});
    }

    async findById(clientId: number) {
        const client = await this.clientRepository.findByPk(clientId);
        if (!client){
            throw new HttpException('Клиент не найден', HttpStatus.NOT_FOUND);
        }
        return client;
    }

    async create(dto: CreateClientDto) {
        const client = await this.clientRepository.findOne({where: {name: dto.name, phone: dto.phone}});
        if (client){
            throw new HttpException('Клиент существует', HttpStatus.BAD_REQUEST);
        }
        return await this.clientRepository.create(dto);
    }

    async update(dto: CreateClientDto, clientId: number) {
        
        const client = await this.clientRepository.findByPk(clientId);

        if (!client){
            throw new HttpException('Клиент не найден', HttpStatus.NOT_FOUND);
        }

        return await client.update({...dto, id: clientId});
    }

    async deleteById(clientId: number) {
        const client = await this.clientRepository.findByPk(clientId);

        if (!client){
            throw new HttpException('Клиент не найден', HttpStatus.NOT_FOUND);
        }

        return await client.update({...client, isDeleted: true})

        // return await client.destroy();
    }
}
