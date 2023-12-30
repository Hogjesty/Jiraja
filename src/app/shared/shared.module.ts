import {NgModule} from '@angular/core';
import {PaginationComponent} from './UI/pagination/pagination.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MyPaginatePipe} from './pipes/my-paginate.pipe';
import {LoaderComponent} from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from "@angular/common";
import { ConfirmComponent } from './modals/confirm/confirm.component';
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { DropdownComponent } from './UI/dropdown/dropdown.component';
import { ButtonComponent } from './UI/button/button.component';
import { CreateTodoModalComponent } from './modals/create-todo-modal/create-todo-modal.component';
import { InputComponent } from './UI/input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PaginationComponent,
    MyPaginatePipe,
    LoaderComponent,
    ConfirmComponent,
    DropdownComponent,
    ButtonComponent,
    CreateTodoModalComponent,
    InputComponent
  ],
  imports: [
    NgbPaginationModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
    exports: [
        PaginationComponent,
        MyPaginatePipe,
        LoaderComponent,
        ConfirmComponent,
        DropdownComponent,
        ButtonComponent,
        InputComponent
    ],

})
export class SharedModule {
}
