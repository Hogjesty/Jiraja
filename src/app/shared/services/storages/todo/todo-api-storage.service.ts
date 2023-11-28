import {Injectable} from '@angular/core';
import {Todo} from "../../../interfaces/Todo.interface";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoApiStorageService {

  private readonly url = 'http://localhost:8080/api';
  private readonly paths = {
    todo: {
      create: '/todo/create',
      get: '/todo/get',
      getAll: '/todo/get-all',
      update: '/todo/update',
      delete: '/todo/delete',
      patch: '/todo/patch',
    }
  }

  private readonly headers: HttpHeaders = new HttpHeaders({
      'charset': 'utf-8',
      'Content-Type': 'application/json'
  });

  public constructor(private httpClient: HttpClient) {
  }

  public add(todoAdd: Todo): Observable<void> {
    console.log(todoAdd)
    const body = JSON.stringify(todoAdd);
    console.log(body)

    return this.httpClient.post<void>(`${this.url}${this.paths.todo.create}`, body, {headers: this.headers});
  }

  public get(id: number): Observable<Todo> {
    const httpParams = new HttpParams();
    httpParams.set('id', id);

    return this.httpClient.get<Todo>(`${this.url}${this.paths.todo.get}`, {params:httpParams, headers: this.headers});
  }

  public getAll(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>(`${this.url}${this.paths.todo.getAll}`, {headers: this.headers});
  }

  public remove(id: number): Observable<void> {
    const httpParams = new HttpParams().append('id', id)

    return this.httpClient.delete<void>(`${this.url}${this.paths.todo.delete}`, {params:httpParams, headers: this.headers});
  }

  public update(todoUpdate: Todo): Observable<void> {
    const body = JSON.stringify(todoUpdate);

    return this.httpClient.put<void>(`${this.url}${this.paths.todo.update}`, body, {headers: this.headers});
  }

  // public updateAll(todosUpdate: Array<Todo>): Observable<void> {
  //
  // }
  //
  // public updateAll(todosUpdate: Array<Todo>): Observable<void> {
  //
  // }
}
