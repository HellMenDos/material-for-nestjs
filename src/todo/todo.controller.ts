import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Req, Res, Response, Request, UseGuards, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import { AuthGuard } from '../auth.guard';
import { ModifyPrefixPipe } from '../modifyprefix.pipe';
import { AllExceptionsFilter } from '../exception.filter';

@UseGuards(AuthGuard)
@Controller('/todo')
export class TodoController { 
    constructor(private todo: TodoService) {}

    @Get('/')
    public getAll() {
        return this.todo
    }

    @Get('/:id')
    public getOne(@Param('id') id: number) {
        return this.todo.getOne(id)
    }

    @Get('pipes/:id')
    public getOneWithPipe(@Param('id', new ModifyPrefixPipe('prefix_1')) id: string) {
        throw new HttpException({ message: "Error"}, HttpStatus.BAD_REQUEST)
    }

    @Post('/')
    public create(@Body() body: TodoDto) {
        return this.todo.create(body)
    }

    @Put('/:id')
    public update(@Param('id') id: number, @Body() body: TodoDto) {
        return this.todo.update(id,body)
    }

    @Delete('/:id') 
    public delete(@Param('id') id: number) {
        return this.todo.delete(id)
    }

}
