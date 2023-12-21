import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from 'src/app/shared/interfaces/Todo.interface';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../../../../shared/modals/confirm/confirm.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() public todoData!: Todo;
  @Output() public idToRemove: EventEmitter<number> = new EventEmitter();
  @Output() public todoToUpdate: EventEmitter<Todo> = new EventEmitter();

  public constructor(public dialog: MatDialog) {}

  public onRemove(): void {
    const matDialogRef = this.dialog.open(ConfirmComponent, {data: "Ви дійсно хочете?"});

    matDialogRef.afterClosed().subscribe(isAgree => {
      if (isAgree) this.idToRemove.emit(this.todoData.id);
    });
  }
}
