import {Component, Input, Self} from '@angular/core';
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() public options:Array<string> = [];

  public constructor(@Self() private readonly ngControl: NgControl) { }

  public get inputText(): string {
    return this.ngControl.value;
  }
}
