import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodolistComponent} from "./todolist/todolist.component";
import {TodoComponent} from "./todolist/todo/todo.component";
import {TodoManagerComponent} from "./todo-manager.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {TodoControlsComponent} from './todo-controls/todo-controls.component';

@NgModule({
  declarations: [
    TodolistComponent,
    TodoComponent,
    TodoManagerComponent,
    TodoControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatDialogModule
  ],
  exports: [
    TodoManagerComponent
  ]
})
export class TodoManagerModule { }
