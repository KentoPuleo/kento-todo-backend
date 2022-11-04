import { Module } from '@nestjs/common';
import { TypeOrmModule} from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { UserModule } from './user/user.module';
import { User } from "./user/user.entity";
import {List} from "./list/list.entity";

@Module({
  imports: [ListModule, UserModule,
    TypeOrmModule.forRoot({
    type: "sqlite",
    database: 'db.sqlite',
    entities: [User, List],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
