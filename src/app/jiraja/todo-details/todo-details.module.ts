import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoDetailsComponent} from "./todo-details.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TodoDetailsComponent
  ]
})
export class TodoDetailsModule { }
