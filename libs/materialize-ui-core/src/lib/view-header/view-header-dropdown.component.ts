import { Component, OnInit, Input, ViewChild, AfterViewInit, TemplateRef, ElementRef } from '@angular/core';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-view-header-dropdown',
  template: `
    <ng-template #template>
        <button #dropdownTrigger data-target="viewHeaderDropdown" class="btn waves-effect dropdown-trigger">
          <i class="material-icons">{{iconName}}</i>
        </button>
        <div id="viewHeaderDropdown" class='dropdown-content'>
          <ng-content></ng-content>
        </div>
      </ng-template>`
})
export class ViewHeaderDropdownComponent implements AfterViewInit {

  /** The name of the icon from the Materialize CSS framework to show for this drowpdown in the view header. */
  @Input() iconName: string;

  // The template used to render the dropdown into the view header and the reference to the trigger
  @ViewChild('template', {static: true}) _template: TemplateRef<any>;
  @ViewChild('dropdownTrigger', {static: false}) _dropdownTrigger: ElementRef;

  // The instance of the materialize dropdown
  private _dropdownInstance: any;

  ngAfterViewInit(): void {
    if(this._dropdownTrigger) {
      // Components template has been instanciated
      this._dropdownInstance = M.Dropdown.init(this._dropdownTrigger.nativeElement, {
        alignment: 'right',
        coverTrigger: false,
        constrainWidth: false
      });
    } else {
      throw new Error('"mui-view-header-dropdown" component is intended to be used inside of the "mui-view-header" component only.');
    }
  }

}
