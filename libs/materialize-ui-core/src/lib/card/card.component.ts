import { Component, Input } from '@angular/core';

/** A component to enclose the items of a card. */
@Component({
  selector: 'mui-card',
  template: `
    <!-- <div class="card fixed-height-med-and-up"> -->
    <div class="card">
      <ng-content></ng-content>
    </div>`
})
export class CardComponent {
}
