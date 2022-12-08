import { IsString} from "class-validator";
import { IsBoolean } from "class-validator";

export class CreatTaskDto {
    @IsBoolean()
    status: boolean;
    @IsString()
    name: string;
}