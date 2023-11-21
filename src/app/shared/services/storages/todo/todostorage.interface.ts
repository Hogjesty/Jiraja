import {Todo} from "../../../interfaces/Todo.interface";
import {InjectionToken} from "@angular/core";

export const TODO_STORAGE_TOKEN = new InjectionToken<TodoStorageInterface>('TODO_STORAGE_TOKEN');

export interface TodoStorageInterface {

  get(id: number): Todo;

  getAll(): Array<Todo>;

  add(todoAdd: Todo): void;

  update(todoUpdate: Todo): void;

  updateAll(todosUpdate: Array<Todo>): void;

  remove(id: number): void;

}
