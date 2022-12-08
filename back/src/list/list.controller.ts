import {Body, Controller, Get, Post, Param, Patch, Query, Delete} from '@nestjs/common';
import { CreatTaskDto} from "./creat-task.dto";
import {ListService} from "./list.service";

@Controller('/list')
export class ListController {
    constructor(private listService: ListService) {}

    @Post()
    addItemToList(@Body() body: CreatTaskDto){
        this.listService.create(body.name, body.status);
    }

    @Get('/:id')
    findList(@Param('id')id: string){
        return this.listService.findOne(parseInt(id));
    }

    @Get()
    findallList(@Query('email')email: string){
        return this.listService.find(email);
    }

    @Delete('/:id')
    removeList(@Param('id')id: string){
        return this.listService.remove(parseInt(id));
    }
}
