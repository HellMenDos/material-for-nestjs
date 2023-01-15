import { IsNotEmpty, IsString } from "class-validator"

export class TodoDto {
    @IsString()
    @IsNotEmpty()
    public title: string
    
    @IsString()
    @IsNotEmpty()
    public content: string
}