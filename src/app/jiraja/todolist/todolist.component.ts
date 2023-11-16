import { Component, Input, OnInit } from '@angular/core';
import { PaginationConfig } from 'src/app/shared/interfaces/PaginationConfig.interface';
import { Todo } from 'src/app/shared/interfaces/Todo.interface';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  providers: [LocalstorageService]
})
export class TodolistComponent implements OnInit {
  
  @Input() public paginationConfig!: PaginationConfig;

  private static readonly TODOS_KEY = "todos array";

  public todos!: Array<Todo>;
  

  public constructor(private storage: LocalstorageService<Array<Todo>>) {

  }

  public ngOnInit(): void {
    this.todos = this.storage.get(TodolistComponent.TODOS_KEY);
  }

  public createNewTodo(titleForNewTodo: string): void {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: titleForNewTodo,
      isDone: false
    }

    let todosArray: Array<Todo> = this.storage.get(TodolistComponent.TODOS_KEY);

    todosArray.push(newTodo);

    this.todos = todosArray;

    this.storage.put(TodolistComponent.TODOS_KEY, todosArray);
  }

  public removeTodoById(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.storage.put(TodolistComponent.TODOS_KEY, this.todos);
  }

  public updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);

    if (index !== -1) {
      this.todos[index] = Object.assign({}, this.todos[index], todo);
    }

    this.storage.put(TodolistComponent.TODOS_KEY, this.todos);
  }
}
