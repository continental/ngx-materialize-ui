import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mui-app-bar-action',
  template: `
    <ng-template #template>
      <li><a (click)="_onClick()"><i class="material-icons">{{iconName}}</i></a></li>
    </ng-template>
    <ng-template #mobileTemplate>
      <a (click)="_onClick()" class="collection-item">{{actionName}}<i class="right material-icons">{{iconName}}</i></a>
    </ng-template>`
})
export class AppBarActionComponent {

  /** The name of the icon from the Materialize CSS framework to show for this action in the app bar. */
  @Input() iconName: string;

  /** The name of the action to show in the action dropdown in case of mobile screen layout. */
  @Input() actionName: string;

  /** An event called if the action is tapped. */
  @Output() tap: EventEmitter<void> = new EventEmitter<void>();

  // The templates used by the app bar to render this action
  @ViewChild('template', {static: true})  _template: TemplateRef<any>;
  @ViewChild('mobileTemplate', {static: true}) _mobileTemplate: TemplateRef<any>;

  constructor() { }

  _onClick() {
    this.tap.next();
  }
}
