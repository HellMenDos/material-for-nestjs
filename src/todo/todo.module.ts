import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from '../entity/Todo.entity'
@Module({
    imports: [
        TypeOrmModule.forFeature([Todo])
    ],
    controllers: [
        TodoController
    ],
    providers: [
        TodoService
    ],
})
export class TodoModule { }
