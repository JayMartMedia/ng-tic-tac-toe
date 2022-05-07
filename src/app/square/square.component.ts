import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: [
    'button {text-align: center; font-size: 170px; height:200px; line-height: 200px; width: 200px;}'
  ]
})
export class SquareComponent {

  @Input()
  value!: 'X' | 'O' | null;

}
