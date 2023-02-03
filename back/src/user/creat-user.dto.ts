import { IsString} from "class-validator";
import { IsEmail} from "class-validator";

export class CreatUserDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;



}