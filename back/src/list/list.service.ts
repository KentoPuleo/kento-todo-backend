import { Injectable } from '@nestjs/common';
import { Repository} from "typeorm";
import { InjectRepository} from "@nestjs/typeorm";
import { List} from "./list.entity";

@Injectable()
export class ListService {
    constructor(@InjectRepository(List) private repo: Repository<List>) {}

    create(name: string, status: boolean) {
        const list = this.repo.create({ name, status});

        return this.repo.save(list);
    }

    findOne(id: number){
        return this.repo.findOneBy({id});
    }

    find(name: string){
        return this.repo.find({where: {name}});
    }

    async update(id: number, attrs: Partial<List>){
       const list = await this.findOne(id);
       if (!list){
           throw new Error("Task not found")
       }
       Object.assign(list, attrs)
       return this.repo.save(list);
    }

    async remove(id: number){
        const list = await this.findOne(id);
        if (!list){
            throw new Error("Task not found")
        }
        return this.repo.remove(list);
    }

}