import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarSearchComponent, MUI_APP_BAR_SEARCH_SERVICE } from './app-bar-search.component';

describe('AppBarSearchComponent', () => {
  let component: AppBarSearchComponent;
  let fixture: ComponentFixture<AppBarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarSearchComponent ],
      providers: [ { provide: MUI_APP_BAR_SEARCH_SERVICE,
                     useValue: {
                        executeSearch: (searchString) => {
                          expect(searchString).toEqual('Search String');
                          return Promise.resolve(['Search', 'String']);
                        }
                      }
                    }]
    })
    .compileComponents();
  }));

  it('should not create standalone', () => {
    try {
      fixture = TestBed.createComponent(AppBarSearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      throw new Error('Component missed to throw error');
    } catch(e) {
      expect(e.message).toEqual('"mui-app-bar-search" component is intended to be used inside of the "mui-app-bar" component only.');
      expect(component).toBeTruthy();
      expect(component._template).toBeTruthy();
      expect(component._dropdownTrigger).toBeFalsy();
    }
  });

  it('should call search servcie on search', () => {
      fixture = TestBed.createComponent(AppBarSearchComponent);
      component = fixture.componentInstance;

      component._executeSearch('Search String');
  });
});
