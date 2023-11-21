import { Pipe, PipeTransform } from '@angular/core';
import { PaginationState } from '../interfaces/PaginationState.interface';

@Pipe({
  name: 'myPaginate',
  pure: false
})
export class MyPaginatePipe implements PipeTransform {

  public transform<T>(value: T[], { itemsPerPage, currentPage }: PaginationState): T[] {
    if (!value || !value.length) {
      return value;
    }

    const toSkip = itemsPerPage * (currentPage - 1);
    const toShow = itemsPerPage;

    return value.filter((value, index) => index >= toSkip && index < toSkip + toShow);
  }
}
