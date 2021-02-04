import { Component, ViewChild, TemplateRef, Input, ElementRef, AfterViewInit } from '@angular/core';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-app-bar-dropdown',
  template: `
    <ng-template #template>
      <li>
        <a href="#!" #dropdownTrigger data-target="appBarDropdown" class="dropdown-trigger">
          <i class="material-icons">{{iconName}}</i>
        </a>
        <div id="appBarDropdown" class='dropdown-content'>
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>`
})
export class AppBarDropdownComponent implements AfterViewInit {

  /** The name of the icon from the Materialize CSS framework to show for this action in the app bar. */
  @Input() iconName: string;

  // The template used to render the dropdown into the app bar and the reference to the trigger
  @ViewChild('template', {static: true}) _template: TemplateRef<any>;
  @ViewChild('dropdownTrigger', {static: false}) _dropdownTrigger: ElementRef;

  // The instance of the materialize dropdown
  private _dropdownInstance: any;

  ngAfterViewInit(): void {
    if (this._dropdownTrigger) {
      // Components template has been instanciated
      this._dropdownInstance = M.Dropdown.init(this._dropdownTrigger.nativeElement, {
        alignment: 'right',
        coverTrigger: false,
        constrainWidth: false
      });
    } else {
      throw new Error('"mui-app-bar-dropdown" component is intended to be used inside of the "mui-app-bar" component only.');
    }
  }

}
