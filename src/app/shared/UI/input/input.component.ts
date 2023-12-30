import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {InputStyles} from "../../interfaces/InputStyles";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {

  @Input() public inputText: string = '';
  @Output() public inputTextChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() public inputStyles: InputStyles = {};

  @ViewChild('input') private input!: ElementRef;

  private currentInputStyles: Required<InputStyles> = {
    'width': 185,
    'height': 60,
    'font-size': 17
  };

  public constructor(private renderer2: Renderer2) {
  }

  public ngAfterViewInit(): void {
    Object.assign(this.currentInputStyles, this.inputStyles);

    Object.entries(this.currentInputStyles)
      .forEach(([style, rawValue]) => this.setStyle(style, `${rawValue}px`));
  }

  private setStyle(style: string, value: string): void {
    this.renderer2.setStyle(this.input.nativeElement, style, value);
  }
}
