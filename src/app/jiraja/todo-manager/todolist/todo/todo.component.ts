import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from 'src/app/shared/interfaces/Todo.interface';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../../../../shared/modals/confirm/confirm.component";
import {TodoDetailsSubjectService} from "../../../../shared/services/subjects/todo-details-subject.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() public todoData!: Todo;
  @Output() public idToRemove: EventEmitter<number> = new EventEmitter();
  @Output() public todoToUpdate: EventEmitter<Todo> = new EventEmitter();

  public constructor(private dialog: MatDialog, private todoDetailsSubjectService:TodoDetailsSubjectService) {}

  public onTodoDataChange(option: string): void {
    this.todoData.status = option;
    this.todoToUpdate.emit(this.todoData);
  }

  public onRemove(): void {
    const matDialogRef = this.dialog.open(ConfirmComponent, {data: "Do u really wanna delete this thing?"});

    matDialogRef.afterClosed().subscribe(isAgree => {
      if (isAgree) this.idToRemove.emit(this.todoData.id);
    });
  }

  public loadTodoDetails(): void {
    this.todoDetailsSubjectService.todoDetailsSubject.next(this.todoData.id);
  }
}
