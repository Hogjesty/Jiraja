import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoDetailsComponent} from "./todo-details.component";



@NgModule({
  declarations: [
    TodoDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoDetailsComponent
  ]
})
export class TodoDetailsModule { }
