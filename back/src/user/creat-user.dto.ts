import { IsString} from "class-validator";
import { IsBoolean } from "class-validator";

export class CreatUserDto {
    @IsBoolean()
    status: boolean;
    @IsString()
    name: string;

}