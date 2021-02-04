import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushContentComponent } from './push-content.component';

describe('PushContentComponent', () => {
  let component: PushContentComponent;
  let fixture: ComponentFixture<PushContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially be not pushed', () => {
    expect(component.isPushed).toBeFalse();
  });
});
