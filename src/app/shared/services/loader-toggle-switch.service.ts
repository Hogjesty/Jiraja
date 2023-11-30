import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderToggleSwitchService {

  public _isLoaderEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // public getIsLoaderEnabled(): BehaviorSubject<boolean> {
  //   return this._isLoaderEnabled;
  // }
  //
  // public setIsLoaderEnabled(value: boolean): void {
  //   this._isLoaderEnabled.next(value);
  // }

}
