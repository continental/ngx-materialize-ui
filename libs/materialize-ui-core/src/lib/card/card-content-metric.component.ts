import { Component, Input } from '@angular/core';

/** A component to show a metric within a content area on a card. */
@Component({
  selector: 'mui-card-content-metric',
  template: `<div class="card-content-metric">
              <div *ngIf="title" class="title">{{title}}</div>
              <div *ngIf="subtitle" class="subtitle">{{subtitle}}</div>
              <div class="value truncate"><ng-content></ng-content></div>
            </div>`
})
export class CardContentMetricComponent {

  /** The title of the metric. */
  @Input()
  title: string;

  /** A subtitle of the metric, can be used for e.g. unit, difference, increase/decrease indicator, etc.. */
  @Input()
  subtitle: string;

}
