import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() public size!: number;
  @Input() public itemsPerPage!: number;

  @Output() public currentPageUpdate: EventEmitter<number> = new EventEmitter();

  public curentPage: number = 1;

  public onPageChange(): void {
    this.currentPageUpdate.emit(this.curentPage);
  }
}
