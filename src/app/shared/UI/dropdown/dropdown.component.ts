import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Output() private onChooseEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() public options!: Array<string>;
  @Input() public currentOption!: string;

  public onChoose(option: string): void {
    this.currentOption = option;
    this.onChooseEmitter.emit(option);
  }
}
