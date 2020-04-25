import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h2>Memes</h2>

    <ul cdkDropList (cdkDropListDropped)="drop($event)">
      <li cdkDrag *ngFor='let meme of memes'>
        {{ meme.name }}
        <img *cdkDragPlaceholder [src]="meme.placeholder">
      </li>
    </ul>
  `
})
export class AppComponent {
  memes = [
    { name: 'Doge', placeholder: '/assets/doge.jpg' },
    { name: 'Keep Calm and Carry on', placeholder: '/assets/keep-calm-and-carry-on.jpg' },
    { name: 'Philosoraptor', placeholder: '/assets/philosoraptor.jpg' },
    { name: 'Success Kid', placeholder: '/assets/success-kid.jpg' },
    { name: 'Trollface', placeholder: '/assets/trollface.jpg' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.memes, event.previousIndex, event.currentIndex);
  }
}
