import { Component, Input  } from '@angular/core';
import { FormControl, ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'mui-text-box',
  template: `
    <div class="input-field">
        <input class="truncate" type="text" (change)="_onChange()" [id]="name" [name]="name" [(ngModel)]="_currentInput">
        <label [for]="name" class="truncate" [class.active]="_currentInput != null || _currentInput != undefined">{{label}}</label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextBoxComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TextBoxComponent,
      multi: true,
    }
  ]
})
export class TextBoxComponent implements ControlValueAccessor, Validator {

    /** The name to use for the text box. */
    @Input()
    name: string;

    /** The label to use for the text box. */
    @Input()
    label: string;

    // The current input
    public _currentInput: string;

    // Functions listening for changes
    private _propagateChange: Array<any> = new Array();

    // Functions listening for touched
    private _propagateTouched: Array<any> = new Array();

    /** Reads the current value of the text box. */
    readValue() {
      return this._currentInput;
    }

    /** Write a value to the text box. */
    writeValue(value) {
        this._currentInput = value;
    }

    /** Register a function which gets called each time the text box value was changed. */
    registerOnChange(fn) {
        this._propagateChange.push(fn);
    }

    /** Register a function which gets called each time the text box was touched. */
    registerOnTouched(fn) {
        this._propagateTouched.push(fn);
    }

    /** Can be called to validate the contents of the text box an get an error object back. */
    validate(c: FormControl) {
        // Form validation is currently not implemented in the ui toolkit
        return null;
    }

    _onChange() {
      this._propagateChange.forEach(fn => {
          fn(this.readValue());
      });
      this._propagateTouched.forEach(fn => {
          fn();
      });
  }
}
