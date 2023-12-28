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


@NgModule({
  declarations: [
    PaginationComponent,
    MyPaginatePipe,
    LoaderComponent,
    ConfirmComponent,
    DropdownComponent,
    ButtonComponent
  ],
  imports: [
    NgbPaginationModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatDialogModule
  ],
    exports: [
        PaginationComponent,
        MyPaginatePipe,
        LoaderComponent,
        ConfirmComponent,
        DropdownComponent,
        ButtonComponent
    ],

})
export class SharedModule {
}
