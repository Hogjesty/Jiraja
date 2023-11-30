import {NgModule} from '@angular/core';
import {PaginationComponent} from './UI/pagination/pagination.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MyPaginatePipe} from './pipes/my-paginate.pipe';
import {LoaderComponent} from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    PaginationComponent,
    MyPaginatePipe,
    LoaderComponent
  ],
  imports: [
    NgbPaginationModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  exports: [
    PaginationComponent,
    MyPaginatePipe,
    LoaderComponent
  ]
})
export class SharedModule {
}
