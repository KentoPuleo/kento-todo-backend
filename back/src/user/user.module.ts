import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller';
import {AppService} from "../app.service";
import {User} from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [AppService]
})
export class UserModule {}
