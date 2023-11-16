import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './UI/pagination/pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MyPaginatePipe } from './pipes/my-paginate.pipe';



@NgModule({
  declarations: [
    PaginationComponent,
    MyPaginatePipe
  ],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports: [
    PaginationComponent,
    MyPaginatePipe
  ]
})
export class SharedModule { }
