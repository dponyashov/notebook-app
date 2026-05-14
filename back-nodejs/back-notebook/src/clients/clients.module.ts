import { forwardRef, Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { Client } from './clients.model';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
  imports: [
    SequelizeModule.forFeature([
      Client
    ]),
    forwardRef( () => AuthModule )
  ],
  exports:[ClientsModule]
})
export class ClientsModule {}
