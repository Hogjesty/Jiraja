import {Component, Inject, OnInit} from '@angular/core';
import {BtnStyles} from "../../interfaces/BtnStyles";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Todo} from "../../interfaces/Todo.interface";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.scss']
})
export class CreateTodoModalComponent implements OnInit {

  public newTodoFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.maxLength(30),
      Validators.minLength(5),
      Validators.required,
    ]),
    status: new FormControl(''),
    description: new FormControl('', Validators.maxLength(30)),
    priority: new FormControl(''),
    executor: new FormControl(''),
    todoRelations: new FormControl([]),
    spentTime: new FormControl('', Validators.pattern('\d+')),
  })

  public cancelBtnStyles: BtnStyles = {background: [150, 1, 19]};

  public constructor(private dialogRef: MatDialogRef<CreateTodoModalComponent>) {
  }

  public ngOnInit(): void {
  }

  public closeModal(isAgree: boolean): void {
    this.dialogRef.close(isAgree);
  }

}
