import { Component, Input } from '@angular/core';

/** A component to show an image within a card. */
@Component({
  selector: 'mui-card-image',
  template:`
    <div class="card-image">
      <img [src]="imageUrl">
      <span *ngIf="title" class="card-title">{{title}}</span>
    </div>`
})
export class CardImageComponent {

  /** Title of the image or the entire card to be shown as overlay on the image. */
  @Input()
  title: string;

  /** Url to the image. */
  @Input()
  imageUrl: string;
}
