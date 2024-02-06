import {Component, Input} from '@angular/core';
import {Todo} from 'src/app/shared/interfaces/Todo.interface';
import {TodoApiStorageService} from "../../../shared/services/storages/todo/todo-api-storage.service";
import {DestroyService} from "../../../shared/services/destroy.service";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  providers: [DestroyService]
})
export class TodolistComponent {

  @Input() public todos!: Array<Todo>;

  public constructor(private storage: TodoApiStorageService, private destroyService: DestroyService) {
  }

  public removeTodoById(id: number): void {
    let idToRemove: number = 0;

    this.todos = this.todos.filter(todo => {
      const isIdNotEquals = todo.id !== id;
      idToRemove = !isIdNotEquals ? todo.id : idToRemove;
      return isIdNotEquals;
    });

    this.storage.remove(idToRemove).pipe(takeUntil(this.destroyService)).subscribe();
  }

  public updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);

    if (index !== -1) {
      this.todos[index] = Object.assign({}, this.todos[index], todo);
      this.storage.update(this.todos[index]).pipe(takeUntil(this.destroyService)).subscribe();
    }
  }
}
