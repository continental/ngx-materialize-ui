import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource = [{id: 1, firstName: 'John', lastName: 'Rambo', score: 0.95 },
                {id: 2, firstName: 'Rockey', lastName: 'Balboa', score: 0.941 },
                {id: 3, firstName: 'Marty', lastName: 'McFly', score: 0.98 },
                {id: 4, firstName: 'Emmet', lastName: 'Brown', score: 0.91 }];

  constructor() { }

  ngOnInit() {
  }

}
