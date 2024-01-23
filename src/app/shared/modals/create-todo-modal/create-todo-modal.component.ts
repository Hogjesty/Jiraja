import {Component, OnInit} from '@angular/core';
import {BtnStyles} from "../../interfaces/BtnStyles";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TODO_STATUSES, TODO_PRIORITIES} from "../../variables/constans";

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.scss']
})
export class CreateTodoModalComponent implements OnInit {
  public cancelBtnStyles: BtnStyles = {background: [150, 1, 19]};

  public TODO_STATUSES = TODO_STATUSES;
  public TODO_PRIORITIES = TODO_PRIORITIES;

  public newTodoFormGroup: FormGroup = new FormGroup({
    title: new FormControl('123', [
      Validators.maxLength(30),
      Validators.minLength(5),
      Validators.required,
    ]),
    status: new FormControl(TODO_STATUSES[0]),
    description: new FormControl('', Validators.maxLength(30)),
    priority: new FormControl(TODO_PRIORITIES[0]),
    executor: new FormControl(''),
    isBlockedBy: new FormControl([]),
    blocks: new FormControl([]),
    estimates: new FormControl(''),
    spentTime: new FormControl('', Validators.pattern('\d+')),
  })

  public constructor(private dialogRef: MatDialogRef<CreateTodoModalComponent>) {
  }

  public ngOnInit(): void {
  }

  public closeModal(isConfirmed: boolean): void {
    console.log(this.newTodoFormGroup.value)
    this.dialogRef.close(isConfirmed ? this.newTodoFormGroup.value : null);
  }
}
