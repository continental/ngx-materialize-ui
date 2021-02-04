import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColspecComponent } from './table-colspec.component';

describe('TableColspecComponent', () => {
  let component: TableColspecComponent;
  let fixture: ComponentFixture<TableColspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format the value', () => {
    component.format = [ [ 'percent', '2.2' ] ];
    const result = component._format(0.12345);
    expect(result).toEqual('12.35%');
  });

});
