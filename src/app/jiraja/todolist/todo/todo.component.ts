import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/Todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() public todoData!: Todo;
  @Output() public idToRemove: EventEmitter<number> = new EventEmitter();
  @Output() public todoToUpdate: EventEmitter<Todo> = new EventEmitter();

  public onRemove(): void {
    this.idToRemove.emit(this.todoData.id);
  }

  public toggleCheckbox(): void {
    this.todoData.isDone = !this.todoData.isDone;
    this.todoToUpdate.emit(this.todoData);
  }
}
