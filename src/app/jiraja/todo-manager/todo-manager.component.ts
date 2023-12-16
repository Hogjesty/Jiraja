import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TodolistComponent} from "./todolist/todolist.component";
import {PaginationState} from "../../shared/interfaces/PaginationState.interface";
import {Todo} from "../../shared/interfaces/Todo.interface";
import {ReplaySubject, takeUntil} from "rxjs";
import {TodoApiStorageService} from "../../shared/services/storages/todo/todo-api-storage.service";

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.scss']
})
export class TodoManagerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(TodolistComponent, {static: true}) public todoList!: TodolistComponent;

  public paginationState: PaginationState = {
    size: 0,
    currentPage: 1,
    itemsPerPage: 8,
  };

  public todos!: Array<Todo>;

  private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  public constructor(private storage: TodoApiStorageService) {
  }

  public ngOnInit(): void {
    this.storage.getAll().pipe(
      takeUntil(this.destroy$)
    ).subscribe(arr => {
      this.paginationState.size = arr.length;
      this.todos = arr;
    });
  }

  public ngAfterViewInit(): void {
    this.todoList.todos = this.todos;
  }

  public addTodo(titleData: string): void {
    this.todoList.createNewTodo(titleData);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
