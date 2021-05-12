import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ConfirmModalService } from './confirm-modal.service';

// Declare materialize css global variable
declare const M: any;

/**
 * Component to show a modal to ask the user for a confirmation.
 */
@Component({
  selector: 'mui-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  providers: [
    ConfirmModalService
  ]
})
export class ConfirmModalComponent implements AfterViewInit {

  /** An event called as soon as the modal has been confirmed. */
  @Output()
  confirmAction = new EventEmitter<any>();

  // The reference to the modal structure in the dom
  @ViewChild('modal')
  _modal: ElementRef;

  // The data context to pass through to the event receiver
  private _dataContext: any;

  // The Materialize css modal instance
  private _modalInstance: any;

  /** Creates a new confirm modal instance. */
  constructor(public _confirmModalService: ConfirmModalService) {
    _confirmModalService.confirmed$.subscribe(c => console.log('Sub Confirmed: ' + c));
  }

  // Initializes the modal
  ngAfterViewInit(): void {
    this._modalInstance = M.Modal.init(this._modal.nativeElement, {});
  }

  /**
   * Opens the modal
   *
   * @param data An optional data context to pass to the confirm action.
   */
  open(data?: any): void {
    this._dataContext = data;
    this._modalInstance.open();
  }

  // Method called by the template on confirmation.
  _onConfirm(): void {
    this.confirmAction.next(this._dataContext);
    this._modalInstance.close();
  }
}
