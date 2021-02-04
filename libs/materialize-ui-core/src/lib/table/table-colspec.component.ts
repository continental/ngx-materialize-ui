import { Component, ViewChild, TemplateRef, Input, Injector, Pipe, PipeTransform, ContentChild } from '@angular/core';
import { PercentPipe, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'mui-table-colspec',
  template:`
    <ng-template #headerTemplate>
      {{label}}
    </ng-template>
    <ng-template #rowTemplate let-rowData>
      {{_format(rowData[key])}}
    </ng-template>`,
  // Add the default pipes with a string token to be able to resolve them via string
  providers: [
    { provide: 'date', useClass: DatePipe },
    { provide: 'upperCase', useClass: UpperCasePipe },
    { provide: 'lowerCase', useClass: LowerCasePipe },
    { provide: 'currency', useClass: CurrencyPipe },
    { provide: 'number', useClass: DecimalPipe },
    { provide: 'percent', useClass: PercentPipe }
  ]
})
export class TableColspecComponent {

  /** The label to show in the header of this columen spec. */
  @Input()
  label: string;

  /** The key to use to access the data in the object of the object array data source. */
  @Input()
  key: string;

  /** The pipes and its arguments to apply to the values of this column. */
  @Input()
  format: [ [string, ...Array<any>] ];

  // The default templates used by the table to render this col spec
  @ViewChild('headerTemplate', {static: true}) _headerTemplate: TemplateRef<any>;
  @ViewChild('rowTemplate', {static: true}) _defaultCellTemplate: TemplateRef<any>;

  // Get an eventually provided custom template
  @ContentChild(TemplateRef) _customCellTemplate: TemplateRef<any>;

  constructor(private _injector: Injector) { }

  // Formats the value using the specified pipes
  _format(originalValue: any): string {
    let value = originalValue;
    this.format?.forEach(p => {
      const pipeTransform = this._injector.get<PipeTransform>(p[0] as any);
      const args = p.slice(1, p.length);
      value = pipeTransform.transform(value, ...args);
    });
    return value;
  }

}
