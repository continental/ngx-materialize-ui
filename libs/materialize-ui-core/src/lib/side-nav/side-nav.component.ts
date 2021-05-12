import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, OnInit } from '@angular/core';
import { PushContentService } from './push-content.service';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit, AfterViewInit {

  /** Initally sets the side nav to open or closed. */
  @Input()
  initiallyIsOpen = false;

  /**
   * Sets the mode of the sidebar.
   */
  @Input()
  mode: 'push' | 'pushBelowAppBar' | 'overlay' = 'push';

  // The side nav element
  @ViewChild('sidenav')
  _sidenavElem: ElementRef;

  private _isOpen = false;

  // The materialize side nav instance
  private _sideNavInstance: any;

  constructor(private _pushContentService: PushContentService) { }

  /** Gets a value indicating if the side nav is open or not. */
  get isOpen() {
    return this,this._isOpen;
  }

  ngOnInit(): void {
    if(this.initiallyIsOpen) {
      this._isOpen = true;
      // If side nav shall be open initially open it
      if(this.mode === 'push' || this.mode === 'pushBelowAppBar') {
        this._pushContentService.pushContent();
      }
    }
  }

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

    if(this.initiallyIsOpen) {
      // Initially open side nav
      this._sideNavInstance.open();
    }
  }

  /** Toggle the side nav. If closed it gets opened, if open it gets closed. */
  toggle() {
    if(this._isOpen) {
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
    this._isOpen = true;
    this._sideNavInstance.open();
  }

  /** Closes the side bar. */
  close() {
    if(this.mode === 'push' || this.mode === 'pushBelowAppBar') {
      this._pushContentService.unpushContent();
    }
    this._isOpen = false;
    this._sideNavInstance.close();
  }

}
