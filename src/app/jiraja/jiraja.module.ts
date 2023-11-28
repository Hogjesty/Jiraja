import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JirajaComponent} from './jiraja.component';
import {FormsModule} from '@angular/forms';
import {TodoinputComponent} from './todoinput/todoinput.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TodoComponent} from './todolist/todo/todo.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClient} from "@angular/common/http";


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
    {provide: HttpClient}
  ],
  exports: [
    JirajaComponent
  ]
})
export class JirajaModule { }
