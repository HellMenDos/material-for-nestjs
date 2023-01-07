import { Body, Controller, Delete, Get, Param, Post, Put, HttpException, HttpStatus, Res, Req,Request, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import { AuthGuard } from '../auth.guard';
import { get } from 'http';
import { TransformPipe } from '../transform.pipe';

@UseGuards(AuthGuard)
@Controller('/todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get('/:id')
    public async getOne(@Param('id') id: number) {
        return await this.todoService.getOne(id)
    }

    @Post('/')
    public async create(
        @Req() req: Request,
        @Body() data: TodoDto
    ) {
        console.log(req.body)
        return await this.todoService.create(data)
    }

    @Delete('/:id')
    public async delete(@Param('id') id: number) {
        return await this.todoService.delete(id)
    }

    @Put('/:id')
    public async update(
        @Param('id') id: number,
        @Body() data: Partial<TodoDto>
    ) {
        return await this.todoService.update(id,data)
    }

    @Get('/')
    public async getAll() {
        throw new HttpException(
            { message: 'Ошибка' },
            HttpStatus.BAD_REQUEST,
        );
    }

    @Get('/pipes/:id')
    public async getWithPipes(@Param('id', new TransformPipe('pipe')) id: string) {
        return id
    }

}
