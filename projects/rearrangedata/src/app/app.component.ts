import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h2>Sort Yellow Submarine Lyrics</h2>

    <ul cdkDropList (cdkDropListDropped)="drop($event)">
      <li cdkDrag *ngFor='let line of lyrics'>
        {{ line }}
      </li>
    </ul>
  `
})
export class AppComponent {
  lyrics = [
    'In the town where I was born',
    'Lived a man who sailed to sea',
    'And he told us of his life',
    'In the land of submarines',
    'So we sailed up to the sun',
    '\'Til we found the sea of green',
    'And we lived beneath the waves',
    'In our yellow submarine',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lyrics, event.previousIndex, event.currentIndex);
  }
}
