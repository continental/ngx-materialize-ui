import { Component, QueryList, ContentChildren, Input, ContentChild, ViewChild,
         ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { AppBarActionComponent } from './app-bar-action.component';
import { AppBarSearchComponent } from './app-bar-search.component';
import { AppBarDropdownComponent } from './app-bar-dropdown.component';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-app-bar',
  templateUrl: './app-bar.component.html'
})
export class AppBarComponent implements AfterViewInit {

  /** The application title to show in the app bar. */
  @Input() appTitle: string;

  /** Event called if the user tapped on the main menue button */
  @Output() mainMenuTap = new EventEmitter<void>();

  // The app bar action toggle from the template to open actions on small screens
  @ViewChild('actionsDropdownTrigger') _actionsDropdownTrigger: ElementRef;

  // The subcomponents inside of the app bar
  @ContentChildren(AppBarDropdownComponent) _appBarDropdowns: QueryList<AppBarDropdownComponent>;
  @ContentChildren(AppBarActionComponent) _appBarActions: QueryList<AppBarActionComponent>;
  @ContentChild(AppBarSearchComponent) _appBarSearch: AppBarSearchComponent;

  ngAfterViewInit(): void {
    M.Dropdown.init(this._actionsDropdownTrigger.nativeElement, {alignment: 'right', coverTrigger: false, constrainWidth: false});
  }

  _onMainMenuClick(): void {
    this.mainMenuTap.next();
  }

}
