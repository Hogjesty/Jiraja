import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.scss']
})
export class TodoinputComponent {

  @Output() public title: EventEmitter<string> = new EventEmitter();
  public titleData: string = "";

  public titleChanged(): void {
    if (this.titleData) {
      this.title.emit(this.titleData);
      this.titleData = "";
    }
  }
}
