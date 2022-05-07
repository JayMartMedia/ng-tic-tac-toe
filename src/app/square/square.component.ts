import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton *ngIf="value === 'X'" status="primary">{{value}}</button>
    <button nbButton *ngIf="value === 'O'" status="success">{{value}}</button>
  `,
  styles: [
    'button {text-align: center; font-size: 170px !important; height:200px; line-height: 200px; width: 200px;}'

  ]
})
export class SquareComponent {

  @Input()
  value!: 'X' | 'O' | null;

}
