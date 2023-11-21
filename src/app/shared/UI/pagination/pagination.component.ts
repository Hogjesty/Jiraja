import { Component, EventEmitter, Input, Output } from '@angular/core';
import {PaginationState} from "../../interfaces/PaginationState.interface";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() public paginationState!: PaginationState;
  @Output() public paginationStateChange: EventEmitter<PaginationState> = new EventEmitter();

  public onPageChange(): void {
    this.paginationStateChange.emit(this.paginationState);
  }
}
