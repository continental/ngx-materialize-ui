import { Component, Input  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mui-text-area',
  template: `
    <div class="input-field">
        <textarea #inputField
               class="materialize-textarea"
               (input)="_onInput()"
               [id]="name"
               [(ngModel)]="_currentValue">
        </textarea>
        <label [for]="name" class="truncate" [class.active]="_currentValue">{{label}}</label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextAreaComponent,
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor {

    /** The name to use for the text area. */
    @Input()
    name: string;

    /** The label to use for the text area. */
    @Input()
    label: string;

    _currentValue = '';

    // Functions listening for changes
    private _propagateChange: Array<any> = new Array();

    // Functions listening for touched
    private _propagateTouched: Array<any> = new Array();

    /** Write a value to the text box. */
    writeValue(value) {
        this._currentValue = value;
    }

    /** Register a function which gets called each time the text box value was changed. */
    registerOnChange(fn) {
        this._propagateChange.push(fn);
    }

    /** Register a function which gets called each time the text box was touched. */
    registerOnTouched(fn) {
        this._propagateTouched.push(fn);
    }

    _onInput() {
      this._propagateChange.forEach(fn => {
          fn(this._currentValue);
      });
      this._propagateTouched.forEach(fn => {
          fn();
      });
  }
}
