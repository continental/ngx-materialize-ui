import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeaderDropdownComponent } from './view-header-dropdown.component';

describe('ViewHeaderDropdownComponent', () => {
  let component: ViewHeaderDropdownComponent;
  let fixture: ComponentFixture<ViewHeaderDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHeaderDropdownComponent ]
    })
    .compileComponents();
  }));

  it('should not create standalone', () => {
    try {
      fixture = TestBed.createComponent(ViewHeaderDropdownComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      throw new Error('Component missed to throw error');
    } catch(e) {
      expect(e.message)
        .toEqual('"mui-view-header-dropdown" component is intended to be used inside of the "mui-view-header" component only.');
      expect(component).toBeTruthy();
      expect(component._template).toBeTruthy();
      expect(component._dropdownTrigger).toBeFalsy();
    }
  });
});
