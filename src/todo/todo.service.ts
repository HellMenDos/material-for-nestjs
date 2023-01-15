/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entity/todo.entity';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService { 
    constructor(@InjectRepository(Todo) private todoModal: Repository<Todo>) {}

    public create(data: TodoDto) {
        return this.todoModal.save(data)
    }

    public getAll() {
        return this.todoModal.find()
    }

    public getOne(id: number) {
        return this.todoModal.findOne({ where: { id } })
    }

    public update(id: number, data: TodoDto) {
        return this.todoModal.update({ id }, data)
    }

    public delete(id: number) {
        return this.todoModal.delete({ id })
    }
}
