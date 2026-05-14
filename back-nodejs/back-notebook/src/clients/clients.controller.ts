import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './clients.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RoleValues } from 'src/consts/role-values';
import { RolesGuard } from 'src/auth/roles-guard';


@ApiTags('Клиенты')
@Controller('clients')
export class ClientsController {

    constructor(private clientsService: ClientsService){}

    @ApiOperation({summary: 'Список всех клиентов'})
    @ApiResponse({status: 200, type: [Client]})
    @Get()
    getClients(){
        return this.clientsService.findAll();
    }

    @ApiOperation({summary: 'Клиент по идентификатору'})
    @ApiResponse({status: 200, type: Client})
    @Get('/:clientId')
    getClientById(@Param('clientId') clientId: number){
        return this.clientsService.findById(clientId);
    }

    @ApiOperation({summary: 'Создание клиента'})
    @Roles(RoleValues.SERVICE)
    @UseGuards(RolesGuard)
    @ApiResponse({status: 200, type: Client})
    @Post()
    createClient(@Body() dto: CreateClientDto) {
        return this.clientsService.create(dto);
    }

    @ApiOperation({summary: 'Обновление клиента'})
    @Roles(RoleValues.SERVICE)
    @UseGuards(RolesGuard)
    @ApiResponse({status: 200, type: Client})
    @Put('/:clientId')
    updateClient(   @Body() dto: CreateClientDto,
                    @Param('clientId') clientId: number) {
        return this.clientsService.update(dto, clientId);
    }

    @ApiOperation({summary: 'Удаление'})
    @Roles(RoleValues.SERVICE)
    @UseGuards(RolesGuard)
    @ApiResponse({status: 200, type: Client})
    @Delete('/:clientId')
    deleteClient(@Param('clientId') clientId: number) {
        return this.clientsService.deleteById(clientId);
    }
}
