import { IsString, IsNumber} from "class-validator";

export class RemoveTaskDto {
    @IsNumber()
    id : number
}