import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {PaginationState} from 'src/app/shared/interfaces/PaginationState.interface';
import {Todo} from 'src/app/shared/interfaces/Todo.interface';
import {TODO_STORAGE_TOKEN, TodoStorageInterface} from "../../shared/services/storages/todo/todostorage.interface";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],

})
export class TodolistComponent {

  @Input() public paginationState!: PaginationState;
  @Output() public paginationStateChange: EventEmitter<PaginationState> = new EventEmitter();

  @Input() public todos!: Array<Todo>;
  @Output() public todosChange: EventEmitter<Array<Todo>> = new EventEmitter();

  public createNewTodo(titleForNewTodo: string): void {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: titleForNewTodo,
      isDone: false
    }

    this.todos.push(newTodo);
    this.todosChange.emit(this.todos);
    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }

  public removeTodoById(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosChange.emit(this.todos);
    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }

  public updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);

    if (index !== -1) {
      this.todos[index] = Object.assign({}, this.todos[index], todo);
    }

    this.todosChange.emit(this.todos);
    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }
}
