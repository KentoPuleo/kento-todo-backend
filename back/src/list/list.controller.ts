import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from '../app.service';
import { CreatTaskDto} from "./creat-task.dto";


@Controller('/list')
export class ListController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getList(): string {
        return 'hi there!'
    }

    @Post()
    addItemToList(@Body() body: CreatTaskDto){
        console.log(body);
    }
}
