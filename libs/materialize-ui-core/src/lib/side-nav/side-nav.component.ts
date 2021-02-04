import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { PushContentService } from './push-content.service';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements AfterViewInit {

  /** Initally sets the side nav to open or closed. */
  @Input()
  isOpen = false;

  /**
   * Sets the mode of the sidebar.
   */
  @Input()
  mode: 'push' | 'pushBelowAppBar' | 'overlay' = 'push';

  // The side nav element
  @ViewChild('sidenav')
  _sidenavElem: ElementRef;

  // The materialize side nav instance
  private _sideNavInstance: any;

  constructor(private _pushContentService: PushContentService) { }

  ngAfterViewInit(): void {
    // Initialize the materialize side nav component
    this._sideNavInstance = M.Sidenav.init(this._sidenavElem.nativeElement);

    // Remove the default close handler of materialize and send the close event of the
    // overlay to the components close function instead
    this._sideNavInstance._overlay.removeEventListener('click', this._sideNavInstance._closeBound);
    this._sideNavInstance._overlay.addEventListener('click', this.close.bind(this));

    if(this.mode === 'push' || this.mode === 'pushBelowAppBar') {
      // On push we add a class to the overlay to be not shown on medium and larger screens
      this._sideNavInstance._overlay.classList.add('sidenav-overlay-not-on-mend-and-up');
    }

    if(this.isOpen) {
      // If side nav shall be open initially open it
      this.open();
    }
  }

  /** Toggle the side nav. If closed it gets opened, if open it gets closed. */
  toggle() {
    if(this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /** Opens the side bar. */
  open() {
    if(this.mode === 'push' || this.mode === 'pushBelowAppBar') {
      this._pushContentService.pushContent();
    }
    this.isOpen = true;
    this._sideNavInstance.open();
  }

  /** Closes the side bar. */
  close() {
    if(this.mode === 'push' || this.mode === 'pushBelowAppBar') {
      this._pushContentService.unpushContent();
    }
    this.isOpen = false;
    this._sideNavInstance.close();
  }

}
