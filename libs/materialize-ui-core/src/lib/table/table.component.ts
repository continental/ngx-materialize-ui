import { Component, OnInit, Input, AfterViewInit, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { TableColspecComponent } from './table-colspec.component';

/** The root component of a table. */
@Component({
  selector: 'mui-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, AfterViewInit {

  /** The data source used to render the rows and the columns. */
  @Input()
  dataSource: Array<any>;

  /** If set to true creates a striped table. */
  @Input()
  striped: boolean;

  /** If set to true creates a table where the row on which the mouse hovers is highlighted. */
  @Input()
  highlight: boolean;

  /** An event called if a row is tappee. */
  @Output()
  rowTap: EventEmitter<any> = new EventEmitter<any>();

  // The subcomponents inside of the table
  @ContentChildren(TableColspecComponent) _colspecs: QueryList<TableColspecComponent>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  ngAfterViewInit(): void {
  }

  _onClick(rowData: any) {
    this.rowTap.next(rowData);
  }

}
