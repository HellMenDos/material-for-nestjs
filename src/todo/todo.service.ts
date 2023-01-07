import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Todo from '../entity/Todo.entity';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService { 
    constructor(@InjectRepository(Todo) private todoModal: Repository<Todo>) {}

    public async create(data: TodoDto) {
        return await this.todoModal.save(data)
    }

    public async getOne(id: number) {
        return await this.todoModal.findOne({ where: { id } })
    }

    public async delete(id: number) {
        return await this.todoModal.delete({ id })
    }

    public async update(id: number, data: Partial<TodoDto>) {
        return await this.todoModal.update({ id }, data)
    }
}
