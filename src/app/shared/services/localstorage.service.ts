import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService<T> {

  public put(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): T {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : [];
  }
}
