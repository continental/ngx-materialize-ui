import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'mui-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {

  /** Specifies the auto show timeout. */
  @Input()
  autoShowTimeout = 200;

  /** Flag to hide spinner based on a value which will be evaluated to truthy*/
  @Input()
  set hideSpinner(value: any) {
    if(value) {
      this._showSpinner = false;
    }
  }

  // Private varialbe to control spinner visibility
  _showSpinner = false;

  ngOnInit() {
    if(this.autoShowTimeout === 0) {
      // Show spinner immediatly
      this._showSpinner = true;
    } else {
      // Show spinner after specified time
      timer(this.autoShowTimeout).subscribe(() => this._showSpinner = true);
    }
  }

}
