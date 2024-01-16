import {Component, OnInit} from '@angular/core';
import {BtnStyles} from "../../../shared/interfaces/BtnStyles";
import {MatDialog} from "@angular/material/dialog";
import {CreateTodoModalComponent} from "../../../shared/modals/create-todo-modal/create-todo-modal.component";
import {Todo} from "../../../shared/interfaces/Todo.interface";
import {TodoApiStorageService} from "../../../shared/services/storages/todo/todo-api-storage.service";

@Component({
  selector: 'app-todo-controls',
  templateUrl: './todo-controls.component.html',
  styleUrls: ['./todo-controls.component.scss']
})
export class TodoControlsComponent implements OnInit {

  public btnStyles: BtnStyles = {
    width: 350
  };

  public constructor(private dialog: MatDialog, private todoService: TodoApiStorageService) { }

  public ngOnInit(): void {
  }

  public openNewTodoModal(): void {
    const matDialogRef = this.dialog.open(CreateTodoModalComponent);

    matDialogRef.afterClosed().subscribe((newTodo: Todo) => {
      if (newTodo) {
        const todo = this.createNewTodoFromFormData(newTodo);
        this.todoService.add(todo).subscribe();
      }
    });
  }

  private createNewTodoFromFormData(todoFormData: Todo): Todo {
    const currentDate = new Date().toISOString().split('T')[0];
    const todoDefaultData = {
      reporter: 'Dummy',
      watchers: [],
      creationDate: currentDate,
      modificationDate: currentDate,
      comments: [],
    }

    return Object.assign({}, todoFormData, todoDefaultData);
  }
}
