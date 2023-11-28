import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {PaginationState} from 'src/app/shared/interfaces/PaginationState.interface';
import {Todo} from 'src/app/shared/interfaces/Todo.interface';
import {TodoApiStorageService} from "../../shared/services/storages/todo/todo-api-storage.service";
import {ReplaySubject, takeUntil} from "rxjs";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],

})
export class TodolistComponent implements OnDestroy {

  @Input() public paginationState!: PaginationState;
  @Output() public paginationStateChange: EventEmitter<PaginationState> = new EventEmitter();

  @Input() public todos!: Array<Todo>;

  private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  public constructor(private storage: TodoApiStorageService) {
  }

  public createNewTodo(titleForNewTodo: string): void {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: titleForNewTodo,
      isDone: false
    }

    this.todos.push(newTodo);

    this.storage.add(newTodo).pipe(takeUntil(this.destroy$)).subscribe();

    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }

  public removeTodoById(id: number): void {
    let idToRemove: number = 0;

    this.todos = this.todos.filter(todo => {
      const isIdNotEquals = todo.id !== id;
      idToRemove = !isIdNotEquals ? todo.id : idToRemove;
      return isIdNotEquals;
    });

    this.storage.remove(idToRemove).pipe(takeUntil(this.destroy$)).subscribe();
    this.paginationState.size = this.todos.length;
    this.paginationStateChange.emit(this.paginationState);
  }

  public updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);

    if (index !== -1) {
      this.todos[index] = Object.assign({}, this.todos[index], todo);
      this.storage.update(this.todos[index]).pipe(takeUntil(this.destroy$)).subscribe();
      this.paginationState.size = this.todos.length;
      this.paginationStateChange.emit(this.paginationState);
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
