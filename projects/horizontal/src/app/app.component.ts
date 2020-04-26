import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h2>Memes</h2>

    <ul cdkDropList cdkDropListOrientation="horizontal" (cdkDropListDropped)="drop($event)">
      <li cdkDrag *ngFor='let meme of memes'>
        <img [src]="meme.url">
      </li>
    </ul>
  `
})
export class AppComponent {
  memes = [
    { url: '/assets/doge.jpg' },
    { url: '/assets/keep-calm-and-carry-on.jpg' },
    { url: '/assets/philosoraptor.jpg' },
    { url: '/assets/success-kid.jpg' },
    { url: '/assets/trollface.jpg' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.memes, event.previousIndex, event.currentIndex);
  }
}
