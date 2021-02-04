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

  dataSource = [ {id: 1, firstName: 'John', lastName: 'Rambo', score: 0.95 },
                    {id: 2, firstName: 'Rockey', lastName: 'Balboa', score: 0.941 },
                    {id: 3, firstName: 'Marty', lastName: 'McFly', score: 0.98 },
                    {id: 4, firstName: 'Emmet', lastName: 'Brown', score: 0.91 } ];

  openSideNav() {
    this.sideNav.open();
  }
}
