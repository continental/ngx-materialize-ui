import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-select',
  template: `
    <div class="input-field">
      <select #select (change)="_onChange()">
        <option value="" disabled [attr.selected]="!_currentValue">Choose your option</option>
        <option *ngFor="let option of options"
                [value]="option[optionValueKey]"
                [attr.selected]="_currentValue === option[optionValueKey] ? true : null">
                {{option[optionLabelKey]}}
        </option>
      </select>
      <label>{{label}}</label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ]
})
export class SelectComponent implements AfterViewChecked, ControlValueAccessor {

  /** The label to use for the text box. */
  @Input()
  label: string;

  /** The array of objects to show als options in the select. */
  @Input()
  options: Array<any>;

  /** The name of the value key in the options object array. */
  @Input()
  optionValueKey = 'value';

  /** The name of the label key in the options object array. */
  @Input()
  optionLabelKey = 'label';

  // The side nav element
  @ViewChild('select')
  _selectElem: ElementRef;

  // The current value
  _currentValue: any;

  // Flag to indicate whether the Materialize control needs a new initialization
  private _initializeMControl = true;

  // The Materialize control instance.
  private _instance: any;

  // Functions listening for changes
  private _propagateChange: Array<any> = new Array();

  // Functions listening for touched
  private _propagateTouched: Array<any> = new Array();

  ngAfterViewChecked(): void {
    if(this._initializeMControl) {
      this._instance = M.FormSelect.init(this._selectElem.nativeElement);
      this._initializeMControl = false;
    }
  }

  /** Write a value to the text box. */
  writeValue(value) {
    this._currentValue = value;
    this._initializeMControl = true;
  }

  /** Register a function which gets called each time the text box value was changed. */
  registerOnChange(fn) {
      this._propagateChange.push(fn);
  }

  /** Register a function which gets called each time the text box was touched. */
  registerOnTouched(fn) {
      this._propagateTouched.push(fn);
  }

  /** Called on changes on select control. */
  _onChange() {
    this._currentValue = this._instance.el.value;
    this._propagateChange.forEach(fn => {
      fn(this._currentValue);
    });
    this._propagateTouched.forEach(fn => {
        fn();
    });
  }

}
