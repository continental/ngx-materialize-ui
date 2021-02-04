import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { PushContentService } from './push-content.service';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  const pushContentService = new PushContentService();
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavComponent ]
    })
    .overrideComponent(SideNavComponent, {
      set: {
        providers: [
          { provide: PushContentService, useValue: pushContentService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should push contet forth and back in push mode', () => {
    spyOn(pushContentService, 'pushContent');
    spyOn(pushContentService, 'unpushContent');
    component.mode = 'push';
    expect(component.isOpen).toBeFalse();
    component.open();
    expect(component.isOpen).toBeTrue();
    expect(pushContentService.pushContent).toHaveBeenCalled();
    component.close();
    expect(component.isOpen).toBeFalse();
    expect(pushContentService.unpushContent).toHaveBeenCalled();
  });

  it('should not push contet forth and back in overlay mode', () => {
    spyOn(pushContentService, 'pushContent');
    spyOn(pushContentService, 'unpushContent');
    component.mode = 'overlay';
    expect(component.isOpen).toBeFalse();
    component.open();
    expect(component.isOpen).toBeTrue();
    expect(pushContentService.pushContent).not.toHaveBeenCalled();
    component.close();
    expect(component.isOpen).toBeFalse();
    expect(pushContentService.unpushContent).not.toHaveBeenCalled();
  });

  it('should open and close side nav on toggle', () => {
    expect(component.isOpen).toBeFalse();
    component.toggle();
    expect(component.isOpen).toBeTrue();
    component.toggle();
    expect(component.isOpen).toBeFalse();
  });

});
