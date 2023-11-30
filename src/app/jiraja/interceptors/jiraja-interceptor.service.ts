import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JirajaInterceptor implements HttpInterceptor {

  private readonly url: string = 'http://localhost:8080/api';

  private readonly headers: HttpHeaders = new HttpHeaders({
    'charset': 'utf-8',
    'Content-Type': 'application/json'
  });

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request.clone({url: `${this.url}${request.url}`, headers: this.headers}));
  }
}
