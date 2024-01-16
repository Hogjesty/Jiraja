import {Component, ElementRef, forwardRef, Renderer2, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {InputStyles} from "../../interfaces/InputStyles";

@Component({
  selector: 'app-input-v3',
  templateUrl: './input-v3.component.html',
  styleUrls: ['./input-v3.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputV3Component), multi: true}
  ]
})
export class InputV3Component {

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

  public constructor(private renderer2: Renderer2) {}

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
