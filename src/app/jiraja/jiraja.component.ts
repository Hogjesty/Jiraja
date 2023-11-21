import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {TodolistComponent} from './todolist/todolist.component';
import {PaginationState} from "../shared/interfaces/PaginationState.interface";
import {Todo} from "../shared/interfaces/Todo.interface";
import {TODO_STORAGE_TOKEN, TodoStorageInterface} from "../shared/services/storages/todo/todostorage.interface";

@Component({
  selector: 'app-jiraja',
  templateUrl: './jiraja.component.html',
  styleUrls: ['./jiraja.component.scss'],
})
export class JirajaComponent implements OnInit, AfterViewInit {

  @ViewChild(TodolistComponent) public todoList!: TodolistComponent;

  public paginationState!: PaginationState;
  public todos!: Array<Todo>;

  public constructor(@Inject(TODO_STORAGE_TOKEN) private storage: TodoStorageInterface) {
  }

  public ngOnInit(): void {
    this.todos = this.storage.getAll();
    this.paginationState = {
      size: this.todos.length,
      currentPage: 1,
      itemsPerPage: 8
    };
  }

  public ngAfterViewInit(): void {
    this.todoList.todos = this.todos;
  }

  public addTodo(titleData: string): void {
    this.todoList.createNewTodo(titleData);
  }

  public updateTodos(event: Array<Todo>): void {
    this.storage.updateAll(event);
  }
}
