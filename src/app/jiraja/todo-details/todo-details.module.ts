import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoDetailsComponent} from "./todo-details.component";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoDetailsComponent
  ]
})
export class TodoDetailsModule { }
