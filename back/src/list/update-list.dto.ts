import {IsString, IsBoolean, IsOptional, IsNumber} from "class-validator";

export class UpdateListDto{
    @IsNumber()
    @IsOptional()
    id: number

    @IsBoolean()
    @IsOptional()
    status: boolean
}