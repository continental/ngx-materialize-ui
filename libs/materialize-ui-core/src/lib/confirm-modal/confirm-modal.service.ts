/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

/** A service to enable communication of confirm validations with the confirm modal.  */
@Injectable()
export class ConfirmModalService {

  // A map to store the confirmation state of each validator
  private _confirmations = new Map<unknown, boolean>();

  // A subject to provide the current confirmation state
  private _confirmationSubject = new BehaviorSubject<Array<boolean>>([]);

  /** An observable to get the current confirmation status. */
  confirmed$ = this._confirmationSubject
                   .pipe(
                     map(confirmations => confirmations.find(c => c === false) !== undefined ? false : true),
                     distinctUntilChanged());

  /** Sets a confirmaiton for a validator component. */
  setConfirmation(component: any, confirmed: boolean) {
    this._confirmations.set(component, confirmed);
    this._confirmationSubject.next([ ...this._confirmations.values() ]);
  }

}
