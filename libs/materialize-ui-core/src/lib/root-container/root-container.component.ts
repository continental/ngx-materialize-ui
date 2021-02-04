import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mui-root-container',
  template: '<div><ng-content></ng-content></div>',
  styleUrls: ['./root-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RootContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
