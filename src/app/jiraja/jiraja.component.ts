import { Component, ViewChild } from '@angular/core';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-jiraja',
  templateUrl: './jiraja.component.html',
  styleUrls: ['./jiraja.component.scss'],
})
export class JirajaComponent {

  @ViewChild(TodolistComponent) public todoList!: TodolistComponent;
  
  public addTodo(titleData: string): void {
    this.todoList.createNewTodo(titleData);
  }
}
