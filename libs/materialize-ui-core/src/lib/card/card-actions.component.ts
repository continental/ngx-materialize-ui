import { Component } from '@angular/core';

@Component({
  selector: 'mui-card-actions',
  template: `
    <div class="card-action">
      <ng-content></ng-content>
    </div>`
})
export class CardActionsComponent{

}
