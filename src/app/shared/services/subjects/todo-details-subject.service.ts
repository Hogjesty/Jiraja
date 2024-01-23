import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoDetailsSubjectService {
  public readonly todoDetailsSubject: Subject<number> = new Subject<number>();
}
