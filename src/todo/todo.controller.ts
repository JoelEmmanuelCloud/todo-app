import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { TodoDTO } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() todo: TodoDTO): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTodo: TodoDTO): Promise<Todo> {
    return this.todoService.update(id, updatedTodo);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Todo> {
    return this.todoService.remove(id);
  }
}