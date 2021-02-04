import { Component, Input } from '@angular/core';

/** A component to show a content area on a card. */
@Component({
  selector: 'mui-card-content',
  template: `
    <div class="card-content">
        <span *ngIf="title" class="card-title">{{title}}</span>
        <ng-content></ng-content>
    </div>`
})
export class CardContentComponent {

  /** Title to show in the content area of the card. */
  @Input()
  title: string;

}
