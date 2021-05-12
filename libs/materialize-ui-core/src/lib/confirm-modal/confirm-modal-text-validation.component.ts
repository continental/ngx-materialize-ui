import { Component, Input, OnInit } from '@angular/core';
import { ConfirmModalService } from './confirm-modal.service';

/**
 * Component to ask the user for a valid text input.
 */
@Component({
  selector: 'mui-confirm-modal-text-validation',
  template: `
    <div class="input-field">
        <input class="truncate"
              (input)="_onInput()"
              id="text-validation"
              [(ngModel)]="_actualValue">
        <label for="text-validation" class="truncate" [class.active]="_actualValue">{{label}}</label>
    </div>
  `
})
export class ConfirmModalTextValidationComponent {

  /** Label for the confirm value. */
  @Input()
  label = 'Confirm Value';

  /** The confirm value the user has to enter. */
  @Input()
  confirmValue: string;

  // The actual value
  _actualValue: string;

  /**
   * Creates a new instance.
   *
   * @param _confirmModalService The confirm modal service
   */
  constructor(private _confirmModalService: ConfirmModalService) {
    this._confirmModalService.setConfirmation(this, false);
  }

  // Called by the template on each input change
  _onInput() {
    if(this._actualValue === this.confirmValue) {
      this._confirmModalService.setConfirmation(this, true);
    } else {
      this._confirmModalService.setConfirmation(this, false);
    }
  }

}
