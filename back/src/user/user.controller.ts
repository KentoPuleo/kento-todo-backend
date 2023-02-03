import {Body, Controller, Get, Post, Param, Patch, Query, Delete} from '@nestjs/common';
import { CreatUserDto } from "./creat-user.dto";
import { UserService } from "./user.service";

@Controller('/login')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() body: CreatUserDto){
        this.userService.create(body.name, body.password, body.email)
    }

    @Get('/:id')
    findUser(@Param('id') id: string){
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    findallUser() {
        return this.userService.findall()
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string){
        return this.userService.remove(parseInt(id));
    }
}
