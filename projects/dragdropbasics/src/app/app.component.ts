import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="draggable-element" cdkDrag>
      I'm a draggable element
    </div>
  `,
})
export class AppComponent {
}
