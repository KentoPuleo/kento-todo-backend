import { Injectable } from '@nestjs/common';
import { Repository} from "typeorm";
import { InjectRepository} from "@nestjs/typeorm";
import { User} from "./user.entity";


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    create(name: string, password: string, email: string) {
        const user = this.repo.create({ name, password, email});

        return this.repo.save(user);
    }

    findOne(id: number) {
        return this.repo.findOneBy({id});
    }

    findall(){
        return this.repo.find();
    }

    async update(id: number, attrs: Partial<User>){
        const user = await this.findOne(id);
        if (!user) {
            throw new Error("User not found");
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number){
        const user = await this.findOne(id);
        if (!user) {
            throw new Error("User not found");
        }
        return this.repo.remove(user);
    }
}

