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
        <img *cdkDragPreview [src]="meme.preview">
      </li>
    </ul>
  `
})
export class AppComponent {
  memes = [
    { name: 'Doge', preview: '/assets/doge.jpg' },
    { name: 'Keep Calm and Carry on', preview: '/assets/keep-calm-and-carry-on.jpg' },
    { name: 'Philosoraptor', preview: '/assets/philosoraptor.jpg' },
    { name: 'Success Kid', preview: '/assets/success-kid.jpg' },
    { name: 'Trollface', preview: '/assets/trollface.jpg' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.memes, event.previousIndex, event.currentIndex);
  }
}
