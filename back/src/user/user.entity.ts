import {Entity, Column, PrimaryGeneratedColumn, AfterUpdate, AfterRemove} from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @AfterUpdate()
    logUpdate(){
        console.log("User updated, user:", this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log("Removed User with id:", this.id);
    }
}
