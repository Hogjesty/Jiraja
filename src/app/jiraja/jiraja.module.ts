import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JirajaComponent} from './jiraja.component';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {JirajaInterceptor} from "./interceptors/jiraja-interceptor.service";
import {TodoManagerModule} from "./todo-manager/todo-manager.module";
import {TodoDetailsModule} from "./todo-details/todo-details.module";


@NgModule({
  declarations: [
    JirajaComponent,
  ],
  imports: [
    CommonModule,
    TodoManagerModule,
    TodoDetailsModule
  ],
  providers: [
    {provide: HttpClient},
    {provide: HTTP_INTERCEPTORS, useClass: JirajaInterceptor, multi: true},
  ],
  exports: [
    JirajaComponent
  ]
})
export class JirajaModule { }
