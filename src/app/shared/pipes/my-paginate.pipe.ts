import { Pipe, PipeTransform } from '@angular/core';
import { PaginationConfig } from '../interfaces/PaginationConfig.interface';

@Pipe({
  name: 'myPaginate'
})
export class MyPaginatePipe implements PipeTransform {

  public transform<T>(value: T[], { itemsPerPage, currentPage }: PaginationConfig): T[] {
    if (!value || !value.length) {
      return value;
    }

    const toSkip = itemsPerPage * (currentPage - 1);
    const toShow = itemsPerPage;

    return value.filter((value, index) => index >= toSkip && index < toSkip + toShow);
  }

}
