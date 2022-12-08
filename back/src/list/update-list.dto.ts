import {IsString, IsBoolean, IsOptional} from "class-validator";

export class UpdateListDto{
    @IsString()
    @IsOptional()
    name: string

    @IsBoolean()
    @IsString()
    status: boolean
}