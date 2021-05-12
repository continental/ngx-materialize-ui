import { Component, Input  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mui-text-box',
  template: `
    <div class="input-field">
        <input #inputField
               [type]="type"
               class="truncate"
               (input)="_onInput()"
               [id]="name"
               [(ngModel)]="_currentValue">
        <label [for]="name" class="truncate" [class.active]="_currentValue">{{label}}</label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextBoxComponent,
      multi: true
    }
  ]
})
export class TextBoxComponent implements ControlValueAccessor {

    /** The name to use for the text box. */
    @Input()
    name: string;

    /** The label to use for the text box. */
    @Input()
    label: string;

    /** Indicates if the text shall show the text or bullets to hide the inputs. */
    @Input()
    type: 'text' | 'password' = 'text';

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
