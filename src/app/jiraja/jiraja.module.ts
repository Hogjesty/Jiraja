import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JirajaComponent} from './jiraja.component';
import {FormsModule} from '@angular/forms';
import {TodoinputComponent} from './todoinput/todoinput.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TodoComponent} from './todolist/todo/todo.component';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {JirajaInterceptor} from "./interceptors/jiraja-interceptor.service";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    JirajaComponent,
    TodoinputComponent,
    TodolistComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    {provide: HttpClient},
    {provide: HTTP_INTERCEPTORS, useClass: JirajaInterceptor, multi: true}
  ],
  exports: [
    JirajaComponent
  ]
})
export class JirajaModule { }
