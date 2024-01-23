import { Component, OnInit } from '@angular/core';
import {TodoDetailsSubjectService} from "../../shared/services/subjects/todo-details-subject.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  public constructor(private todoDetailsSubjectService:TodoDetailsSubjectService) { }

  public ngOnInit(): void {
    this.todoDetailsSubjectService.todoDetailsSubject
    //   .pipe(switchMap((todoId: number, index: number) => {
    //     return service.getTodoDetails(todoId);
    //   }))
    //   .subscribe((todoId: number) => {
    //
    // });
  }

}
