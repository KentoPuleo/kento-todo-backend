import { Injectable } from '@nestjs/common';
import { Repository} from "typeorm";
import { InjectRepository} from "@nestjs/typeorm";
import { List} from "./list.entity";

@Injectable()
export class ListService {
    constructor(@InjectRepository(List) private repo: Repository<List>) {}

    create(name: string, status: boolean) {
        console.log("create user");
        try {
            const list = this.repo.create({name, status});

            return this.repo.save(list);
        } catch (e) {
            console.log("error:");
            console.log(e);
        }
    }

    findOne(id: number){
        return this.repo.findOneBy({id});
    }

    findall(){
        return this.repo.find();
    }

    async update(id: number, status: boolean) {
        const list = await this.findOne(id);
        if (!list) {
            throw new Error("Task not found")
        }
        Object.assign(list, {status})
        return this.repo.save(list);
    }

    async remove(id : number){
        const task = await this.findOne(id);
        if (!task){
            throw new Error("Task not found")
        }
        return this.repo.remove(task);
    }

}