import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderToggleSwitchService {

  public _isLoaderEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

}
