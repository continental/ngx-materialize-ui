import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'mui-collapsible',
  templateUrl: './collapsible.component.html'
})
export class CollapsibleComponent implements AfterViewInit {

  // The reference to the collapsible element
  @ViewChild('collapsible', {static: false}) _collapsibleElement: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    M.Collapsible.init(this._collapsibleElement.nativeElement, {accordion: false});
  }

}
