import {Component, ElementRef, Renderer2, Self, ViewChild} from '@angular/core';
import {InputStyles} from "../../interfaces/InputStyles";
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-input-v2',
  templateUrl: './input-v2.component.html',
  styleUrls: ['./input-v2.component.scss']
})
export class InputV2Component implements ControlValueAccessor {

  public inputText: string = '';
  // public onChange!:(value: string) =>void;
  // public onTouched!: ()=>void

  private onChange = (value: string) :void=>{};
  private onTouched = ():void=>{}
  public inputStyles: InputStyles = {};

  @ViewChild('input') private input!: ElementRef;

  private currentInputStyles: Required<InputStyles> = {
    'width': 185,
    'height': 60,
    'font-size': 17
  };

  public constructor(@Self() private readonly ngControl: NgControl, private renderer2: Renderer2) {
    this.ngControl.valueAccessor = this;
  }

  public change(event:Event):void{
    console.log('sadasd')
    const inputElement = event.target as HTMLInputElement;

    this.onChange(inputElement.value)
  }

  public writeValue(value: any): void {
    this.inputText = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private setStyle(style: string, value: string): void {
    this.renderer2.setStyle(this.input.nativeElement, style, value);
  }
}

