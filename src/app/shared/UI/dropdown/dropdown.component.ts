import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() public options!: Array<string>;
  @Input() public currentOption!: string;

  public onTouched: () => void = () => {};
  private onChange: (value: string) => void = () => {};

  public writeValue(value: any): void {
    if (value) {
      this.currentOption = value;
    }
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onChoose(option: string): void {
    this.currentOption = option;
    this.onChange(option);
    this.onTouched();
  }
}
