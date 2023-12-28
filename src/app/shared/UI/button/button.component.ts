import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BtnStyles, RgbArray} from "../../interfaces/BtnStyles";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {

  @Input() public btnStyles: BtnStyles = {};

  private currentBtnStyles: Required<BtnStyles> = {
    'width': 185,
    'height': 60,
    'color': [0, 0, 0],
    'background': [70, 129, 36],
    'font-size': 17
  };

  @ViewChild('btn') private btn!: ElementRef;

  public constructor(private renderer2: Renderer2) {
  }

  public ngAfterViewInit(): void {
    Object.assign(this.currentBtnStyles, this.btnStyles);

    for (let [style, rawValue] of Object.entries(this.currentBtnStyles)) {
      let value = `${rawValue}px`;
      if (style === 'color') {
        value = this.arrayToRgb(rawValue as RgbArray);
      }
      if (style === 'background') {
        value = this.makeLinearGradientRule(rawValue as RgbArray);
      }
      this.setStyle(style, value);
    }
  }

  @HostListener('mousedown')
  private onMouseDown(): void {
    const gradient = this.makeLinearGradientRule(this.currentBtnStyles.background as Array<number>, true);
    this.setStyle('background', gradient);
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  private onMouseUpOrLeave(): void {
    const gradient = this.makeLinearGradientRule(this.currentBtnStyles.background as Array<number>);
    this.setStyle('background', gradient);
  }

  private makeLinearGradientRule(baseColor: Array<number>, inverted: boolean = false): string {
    let color = baseColor.join(', ');
    let lighterColor = baseColor.map(color => this.clamp(color + 80, 0, 255)).join(', ');

    [lighterColor, color] = inverted ? [color, lighterColor] : [lighterColor, color];

    return `linear-gradient(rgb(${lighterColor}), rgb(${color}))`;
  }

  private clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
  }

  private arrayToRgb(array: RgbArray): string {
    return `rgb(${array.join(', ')})`;
  }

  private setStyle(style: string, value: string): void {
    this.renderer2.setStyle(this.btn.nativeElement, style, value);
  }
}
