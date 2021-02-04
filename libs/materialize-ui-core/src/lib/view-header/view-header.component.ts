import { Component, OnInit, Input, QueryList, ContentChildren, ViewChild, ElementRef, AfterViewInit, Query } from '@angular/core';
import { ViewHeaderActionComponent } from './view-header-action.component';
import { ViewHeaderDropdownComponent } from './view-header-dropdown.component';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-view-header',
  templateUrl: './view-header.component.html'
})
export class ViewHeaderComponent implements AfterViewInit {

  /** The tile of the view */
  @Input() title: string;

  // The app bar action toggle from the template to open actions on small screens
  @ViewChild('actionsDropdownTrigger') _actionsDropdownTrigger: ElementRef;

  // The subcomponents inside of the view header
  @ContentChildren(ViewHeaderActionComponent) _viewHeaderActions: QueryList<ViewHeaderActionComponent>;
  @ContentChildren(ViewHeaderDropdownComponent) _viewHeaderDropdowns: QueryList<ViewHeaderDropdownComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    M.Dropdown.init(this._actionsDropdownTrigger.nativeElement, {alignment: 'right', coverTrigger: false, constrainWidth: false});
  }

}
