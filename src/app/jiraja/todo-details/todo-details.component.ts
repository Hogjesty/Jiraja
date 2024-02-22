import {Component, HostBinding, OnInit} from '@angular/core';
import {TodoDetailsSubjectService} from "../../shared/services/subjects/todo-details-subject.service";
import {TodoApiStorageService} from "../../shared/services/storages/todo/todo-api-storage.service";
import {DestroyService} from "../../shared/services/destroy.service";
import {takeUntil} from "rxjs";
import {Todo} from "../../shared/interfaces/Todo.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TODO_PRIORITIES, TODO_STATUSES} from 'src/app/shared/variables/constans';
import {BtnStyles} from "../../shared/interfaces/BtnStyles";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  providers: [DestroyService]
})
export class TodoDetailsComponent implements OnInit {

  @HostBinding('class') public class: string = 'todo-details';

  public currentTodo!: Todo;

  public TODO_STATUSES = TODO_STATUSES;
  public TODO_PRIORITIES = TODO_PRIORITIES;

  public newTodoFormGroup!: FormGroup;

  public copyBtnStyles: BtnStyles = {
    'width': 40,
    'height': 40,
    'color': [255, 255, 255],
    'background': [222, 53, 53],
  };

  public editBtnStyles: BtnStyles = {
    'width': 45,
    'height': 45,
    'color': [255, 255, 255],
    'background': [222, 53, 53],
  };

  public saveBtnStyles: BtnStyles = {
    'width': 45,
    'height': 45,
    'color': [0, 0, 0],
  };

  public cancelBtnStyles: BtnStyles = {
    'width': 45,
    'height': 45,
    'color': [0, 0, 0],
    'background': [245, 245, 42],
  };

  public titleIsBeingEdited: boolean = false;

  public todoTitlesMap: Map<number, string> = new Map<number, string>();

  public constructor(
    private todoDetailsSubjectService: TodoDetailsSubjectService,
    private todoStorageService: TodoApiStorageService,
    private destroyService: DestroyService,
    private formBuilder: FormBuilder,
  ) {

    this.todoStorageService.getNames([48276, 439, 48276]).subscribe((map: Map<number, string>) => {
    });
  }

  public ngOnInit(): void {
    this.todoStorageService.get(98123)
      .pipe(takeUntil(this.destroyService))
      .subscribe((todo: Todo) => {
        this.initFormGroup(todo);
        this.currentTodo = todo;
      });// todo remove

    this.todoDetailsSubjectService.todoDetailsSubject
      .pipe(takeUntil(this.destroyService))
      .subscribe((todoId: number) => {
        return this.todoStorageService.get(todoId)
          .pipe(takeUntil(this.destroyService))
          .subscribe((todo: Todo) => {
            this.initFormGroup(todo);
            this.currentTodo = todo;
          });
      });
  }

  public onCopyIdButtonClick(): void {
    navigator.clipboard.writeText(this.currentTodo.id.toString()).then();
  }

  public onEditTitleButtonClick(): void {
    this.titleIsBeingEdited = true;
  }

  public onSaveTitleButtonClick(): void {
    this.titleIsBeingEdited = false;
    // todo save title
  }

  public onCancelTitleButtonClick(): void {
    this.titleIsBeingEdited = false;
  }

  private initFormGroup(todo: Todo): void {
    this.newTodoFormGroup = this.formBuilder.group({
      title: [todo.title, [
        Validators.maxLength(30),
        Validators.minLength(5),
        Validators.required,
      ]],
      status: [todo.status],
      description: [todo.description, Validators.maxLength(30)],
      priority: [todo.priority],
      executor: [todo.executor],
      isBlockedBy: [todo.isBlockedBy],
      blocks: [todo.blocks],
      estimates: [todo.estimates],
      spentTime: [todo.spentTime, Validators.pattern('\d+')],
      comments: [todo.comments],
    });
  }

  public onTodoStatusChange($event: string): void {

  }
}
