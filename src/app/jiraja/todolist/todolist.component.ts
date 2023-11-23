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

  public constructor(@Inject(TODO_STORAGE_TOKEN) private storage: TodoStorageInterface) {
  }

  public createNewTodo(titleForNewTodo: string): void {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: titleForNewTodo,
      isDone: false
    }

    this.todos.push(newTodo);
    this.storage.add(newTodo);

    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }

  public removeTodoById(id: number): void {
    let idToRemove: number = 0;

    this.todos = this.todos.filter(todo => {
      const isIdNotEquals = todo.id !== id;
      idToRemove = !isIdNotEquals ? todo.id : 0;
      return isIdNotEquals;
    });

    this.storage.remove(idToRemove);
    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }

  public updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);

    if (index !== -1) {
      this.todos[index] = Object.assign({}, this.todos[index], todo);
      this.storage.update(this.todos[index]);
      this.paginationState.size = this.todos.length;
      this.paginationStateChange.emit(this.paginationState);
    }
  }
}
