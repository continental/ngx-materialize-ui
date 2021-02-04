import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarDropdownComponent } from './app-bar-dropdown.component';

describe('AppBarDropdownComponent', () => {
  let fixture: ComponentFixture<AppBarDropdownComponent>;
  let component: AppBarDropdownComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarDropdownComponent ]
    })
    .compileComponents();
  }));

  it('should not create standalone', () => {
    try {
      fixture = TestBed.createComponent(AppBarDropdownComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      throw new Error('Component missed to throw error');
    } catch(e) {
      expect(e.message).toEqual('"mui-app-bar-dropdown" component is intended to be used inside of the "mui-app-bar" component only.');
      expect(component).toBeTruthy();
      expect(component._template).toBeTruthy();
      expect(component._dropdownTrigger).toBeFalsy();
    }
  });
});
