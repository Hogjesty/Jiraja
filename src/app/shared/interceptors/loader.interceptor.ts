import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {paths} from "../../jiraja/constances/paths";
import {LoaderToggleSwitchService} from "../services/loader-toggle-switch.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private readonly loaderBlackList!: Map<string, boolean>;

  public constructor(private loaderService: LoaderToggleSwitchService) {
    this.loaderBlackList = new Map<string, boolean>();
    this.loaderBlackList.set(paths.todo.update, true);
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if (!this.loaderBlackList.get(request.url)) {
      this.loaderService._isLoaderEnabled.next(true);
    // }

    return next.handle(request).pipe(finalize(() => this.loaderService._isLoaderEnabled.next(false)));
  }
}
