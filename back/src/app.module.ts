import { Module } from '@nestjs/common';
import { TypeOrmModule} from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { UserModule } from './user/user.module';
import { User } from "./user/user.entity";
import {List} from "./list/list.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5555,
      username: 'root',
      password: '',
      database: 'mydb',
      entities: [List,User],
      autoLoadEntities: true,
      synchronize: true,
  }),ListModule, UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}