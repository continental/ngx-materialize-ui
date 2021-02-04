import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mui-view-header-action',
  template: `
    <ng-template #template>
      <button (click)="_onClick()" class="btn waves-effect">{{actionName}}</button>
    </ng-template>
    <ng-template #mobileTemplate>
      <a (click)="_onClick()" class="collection-item">{{actionName}}<i class="left material-icons">{{iconName}}</i></a>
    </ng-template>`
})
export class ViewHeaderActionComponent {

  /** The name of the icon from the Materialize CSS framework to show for this action in the app bar. */
  @Input() iconName: string;

  /** The name of the action. */
  @Input() actionName: string;

  /** A router link to tigger the router for navigation. */
  @Input() routerLink: Array<any> | string;

  /** An event called if the action is tapped. */
  @Output() tap: EventEmitter<void> = new EventEmitter<void>();

  // The templates used by the app bar to render this action
  @ViewChild('template', {static: true})  _template: TemplateRef<any>;
  @ViewChild('mobileTemplate', {static: true}) _mobileTemplate: TemplateRef<any>;

  constructor(private _router: Router) { }

  _onClick() {
    // Execute action event
    this.tap.next();
    // Execute routing if routerLink is available
    if (this.routerLink) {
      if(typeof(this.routerLink) === 'string') {
        this._router.navigate([this.routerLink]);
      } else {
        this._router.navigate(this.routerLink);
      }
    }
  }

}
