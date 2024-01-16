import {Component, Self} from '@angular/core';
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  public constructor(@Self() private readonly ngControl: NgControl) {}

  public get inputText(): string {
    return this.ngControl.value;
  }
}
