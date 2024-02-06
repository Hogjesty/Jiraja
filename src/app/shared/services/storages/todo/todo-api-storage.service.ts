import {Injectable} from '@angular/core';
import {Todo} from "../../../interfaces/Todo.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {paths} from "../../../../jiraja/constances/paths";

@Injectable({
  providedIn: 'root'
})
export class TodoApiStorageService {

  public constructor(private httpClient: HttpClient) {
  }

  public add(todoAdd: Todo): Observable<void> {
    const body = JSON.stringify(todoAdd);

    return this.httpClient.post<void>(paths.todo.create, body);
  }

  public get(id: number): Observable<Todo> {
    const httpParams = new HttpParams().append('id', id);

    return this.httpClient.get<Todo>(paths.todo.get, {params:httpParams});
  }

  public getAll(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>(paths.todo.getAll);
  }

  public remove(id: number): Observable<void> {
    const httpParams = new HttpParams().append('id', id);

    return this.httpClient.delete<void>(paths.todo.delete, {params:httpParams});
  }

  public update(todoUpdate: Todo): Observable<void> {
    const body = JSON.stringify(todoUpdate);

    return this.httpClient.put<void>(paths.todo.update, body);
  }

  // public updateAll(todosUpdate: Array<Todo>): Observable<void> {
  //
  // }
  //
  // public updateAll(todosUpdate: Array<Todo>): Observable<void> {
  //
  // }
}
