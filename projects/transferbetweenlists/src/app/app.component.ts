import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <ng-container cdkDropListGroup>
      <div>
        <h2>Backlog</h2>

        <ul cdkDropList [cdkDropListData]="backlog" (cdkDropListDropped)="drop($event)">
          <li cdkDrag *ngFor='let task of backlog'>
            {{ task }}
          </li>
        </ul>
      </div>
      <div>
        <h2>Sprint</h2>

        <ul cdkDropList [cdkDropListData]="sprint" (cdkDropListDropped)="drop($event)">
          <li cdkDrag *ngFor='let task of sprint'>
            {{ task }}
          </li>
        </ul>
      </div>
    </ng-container>
  `
})
export class AppComponent {

  backlog = [
    'fix bug',
    'implement authentication',
    'buy coffee',
    'learn Angular',
    'learn Angular CDK'
  ];

  sprint = [
    'setup project'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

