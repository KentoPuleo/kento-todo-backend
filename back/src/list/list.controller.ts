import {Body, Controller, Get, Post, Param, Patch, Query, Delete} from '@nestjs/common';
import { CreatTaskDto} from "./creat-task.dto";
import {ListService} from "./list.service";
import {UpdateListDto} from "./update-list.dto";

@Controller('/list')
export class ListController {
    constructor(private listService: ListService) {}

    @Post()
    addItemToList(@Body() body: CreatTaskDto){
        console.log("now in backend")
        this.listService.create(body.name, body.status);
    }

    @Get()
    findallList(){
        return this.listService.findall();
        console.log("test");
    }

    @Patch('/:id') //@Patch(:id)
    updatetask(@Param('id')id: number, @Body()body: UpdateListDto){
        return this.listService.update(id, body.status)
    }

    @Delete(':id')
    removeList(@Param('id')id: number){
        return this.listService.remove(id);
    }
}
