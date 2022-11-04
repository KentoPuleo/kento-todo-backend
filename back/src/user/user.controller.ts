import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from '../app.service';
import { CreatUserDto } from "./creat-user.dto";

@Controller('/users')
export class UserController {
    constructor(private readonly appService: AppService) {}

    @Post()
    addUserToList(@Body() body: CreatUserDto){
        console.log(body);
        return 'by there 2!';
    }
}
