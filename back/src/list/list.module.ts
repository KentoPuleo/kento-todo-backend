import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import {AppService} from "../app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {List} from "./list.entity";

@Module({
  imports: [TypeOrmModule.forFeature([List])],
  controllers: [ListController],
  providers: [AppService]
})
export class ListModule {}
