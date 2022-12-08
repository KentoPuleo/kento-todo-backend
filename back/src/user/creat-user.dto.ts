import { IsString} from "class-validator";
import { IsEmail} from "class-validator";

export class CreatUserDto {
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsEmail()
    email: string;


}