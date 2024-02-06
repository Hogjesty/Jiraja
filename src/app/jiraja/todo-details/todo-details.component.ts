import {Component, OnInit} from '@angular/core';
import {TodoDetailsSubjectService} from "../../shared/services/subjects/todo-details-subject.service";
import {TodoApiStorageService} from "../../shared/services/storages/todo/todo-api-storage.service";
import {DestroyService} from "../../shared/services/destroy.service";
import {takeUntil} from "rxjs";
import {Todo} from "../../shared/interfaces/Todo.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { TODO_PRIORITIES, TODO_STATUSES } from 'src/app/shared/variables/constans';
import {BtnStyles} from "../../shared/interfaces/BtnStyles";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  providers: [DestroyService]
})
export class TodoDetailsComponent implements OnInit {

  public currentTodo!: Todo;

  public TODO_STATUSES = TODO_STATUSES;
  public TODO_PRIORITIES = TODO_PRIORITIES;

  public newTodoFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [
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
    comments: new FormControl(''),
  })

  public btnStyles: BtnStyles = {
    'width': 40,
    'height': 40,
    'color': [255, 255, 255],
    'background': [222, 53, 53],
  };

  public constructor(
    private todoDetailsSubjectService: TodoDetailsSubjectService,
    private todoStorageService: TodoApiStorageService,
    private destroyService: DestroyService
  ) {}

  public ngOnInit(): void {


    this.todoStorageService.get(1)
      .pipe(takeUntil(this.destroyService))
      .subscribe((todo: Todo) => this.currentTodo = todo);



    this.todoDetailsSubjectService.todoDetailsSubject
      .pipe(takeUntil(this.destroyService))
      .subscribe((todoId: number) => {
        return this.todoStorageService.get(todoId)
          .pipe(takeUntil(this.destroyService))
          .subscribe((todo: Todo) => this.currentTodo = todo);
      });
  }

  public onCopyIdButtonClick(): void {
    navigator.clipboard.writeText(this.currentTodo.id.toString()).then();
  }
}
