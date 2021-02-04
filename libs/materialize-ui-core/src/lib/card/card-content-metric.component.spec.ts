import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentMetricComponent } from './card-content-metric.component';

describe('CardContentMetricComponent', () => {
  let component: CardContentMetricComponent;
  let fixture: ComponentFixture<CardContentMetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContentMetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
