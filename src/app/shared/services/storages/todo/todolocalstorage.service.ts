import {Injectable} from '@angular/core';
import {Todo} from "../../../interfaces/Todo.interface";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoLocalStorageService {

  private readonly TODOS_KEY = "todos array";

  public constructor(private http: HttpClient) {
  }

  public add(todoAdd: Todo): void {
    const todos: Array<Todo> = this.getTodos();
    todos.push(todoAdd);
    localStorage.setItem(this.TODOS_KEY, JSON.stringify(todos));
  }

  public get(id: number): Observable<Todo> {
    const todos: Array<Todo> = this.getTodos();

    const todo = todos.find(todo => todo.id === id);

    this.checkCondition(!todo, 'There is no todo with such id!');

    return of(todo as Todo);
  }

  public getAll(): Observable<Array<Todo>> {
    const value = localStorage.getItem(this.TODOS_KEY);

    // return of(value ? JSON.parse(value) : []);
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos/1');
  }

  public update(todoUpdate: Todo): void {
    this.checkCondition(!todoUpdate.id, 'Value has to contain id!');

    const todos: Array<Todo> = this.getTodos();

    let indexToUpdate = todos.findIndex(todo => todo.id === todoUpdate.id);

    this.checkCondition(indexToUpdate === -1, 'There is no todo with such id!');

    todos[indexToUpdate] = todoUpdate;
    localStorage.setItem(this.TODOS_KEY, JSON.stringify(todos));
  }

  public updateAll(todosUpdate: Array<Todo>): void {
    localStorage.setItem(this.TODOS_KEY, JSON.stringify(todosUpdate));
  }

  public remove(id: number): void {
    const todos: Array<Todo> = this.getTodos();

    localStorage.setItem(this.TODOS_KEY, JSON.stringify(todos.filter(todo => todo.id !== id)));
  }

  private checkCondition(condition: boolean, errMessage: string): void {
    if (condition) {
      throw new Error(errMessage);
    }
  }

  private getTodos(): Array<Todo> {
    const value = localStorage.getItem(this.TODOS_KEY);
    const todos: Array<Todo> = value ? JSON.parse(value) : [];

    this.checkCondition(!todos.length, 'Todos array is empty!');

    return todos;
  }
}
