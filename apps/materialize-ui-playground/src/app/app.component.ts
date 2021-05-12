import { Component, ViewChild, ElementRef } from '@angular/core';
import { SideNavComponent } from 'ngx-materialize-ui-core';
import { PercentPipe } from '@angular/common';

// Declare materialize css global variable
declare const M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(SideNavComponent)
  sideNav: SideNavComponent;

  @ViewChild('tabs')
  tabs: ElementRef;

  title = 'materialize-ui-playground';

  openSideNav() {
    this.sideNav.open();
  }
}
