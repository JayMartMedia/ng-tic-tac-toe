import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ value }}
    </p>
  `,
  styles: [
    'p {text-align: center; font-size: 170px; margin: 0px; line-height: 200px;}'
  ]
})
export class SquareComponent {

  @Input()
  value!: 'X' | 'O' | null;

}
