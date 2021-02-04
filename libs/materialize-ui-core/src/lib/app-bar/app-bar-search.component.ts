import { Component, ViewChild, TemplateRef, AfterViewInit, ElementRef, InjectionToken, Inject, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

// Declare materialize css global variable
declare const M: any;

/**
 * Interface definition for the search service called by the AppBarSearchComponent.
 */
export interface SearchService {
  /**
   * Method to be called if the search string in the app bar has changed.
   *
   * @param searchString The search string entered to the app bar search field.
   */
  executeSearch(searchString: string): Promise<Array<string>>;
}

/**
 * Token to register the SearchService to.
 */
export const MUI_APP_BAR_SEARCH_SERVICE = new InjectionToken<SearchService>('MUI_APP_BAR_SEARCH_SERVICE');

@Component({
  selector: 'mui-app-bar-search',
  template: `
    <ng-template #template>
      <div #dropdownTrigger data-target="searchDropdown" class="input-field">
        <input #input id="search" type="search" [placeholder]="placeholder"
          (focus)="_onFocus()" (blur)="_onBlur()">
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
      <div id="searchDropdown" class='dropdown-content'>
        <ul class="collection">
          <li *ngFor="let item of _searchResult" class="collection-item">{{item}}</li>
        </ul>
      </div>
    </ng-template>`
})
export class AppBarSearchComponent implements AfterViewInit {

  /** The place holder text to be shown in the app bar in the search field */
  @Input() placeholder = '';

  // The template used to render the dropdown into the app bar and the reference to the trigger
  @ViewChild('template', {static: true})  _template: TemplateRef<any>;
  @ViewChild('dropdownTrigger') _dropdownTrigger: ElementRef;
  @ViewChild('input') _input: ElementRef;

  _searchResult: Array<string>;

  // The instance of the materialize dropdow
  private _dropdownInstance: any;

  private _hasFocus: boolean;

  constructor(@Inject(MUI_APP_BAR_SEARCH_SERVICE) private _searchService: SearchService) { }

  ngAfterViewInit(): void {
    if(this._dropdownTrigger) {
      // Components template has been instanciated
      this._dropdownInstance = M.Dropdown.init(this._dropdownTrigger.nativeElement, {
        coverTrigger: false,
        autoFocus: false
      });

      // Intercept open an close methods to open drop down only if input field has focus
      const that = this;
      this._dropdownInstance.finalOpen = this._dropdownInstance.open;
      this._dropdownInstance.finalClose = this._dropdownInstance.close;
      this._dropdownInstance.open = function() {
        if(that._hasFocus) {
          this.finalOpen();
        }
      };
      this._dropdownInstance.close = function() {
        if(!that._hasFocus) {
          this.finalClose();
        }
      };

      // Query the keyup event from the input element using rxjs and debounce the event
      fromEvent(this._input.nativeElement, 'keyup')
        .pipe(map(() => this._input.nativeElement.value.trim()), debounceTime(600))
        .subscribe((value) => this._executeSearch(value));
    } else {
      // Component template was not instanciated -> inform the user with an error
      throw new Error('"mui-app-bar-search" component is intended to be used inside of the "mui-app-bar" component only.');
    }
  }

  _onFocus() {
    this._hasFocus = true;
    this._dropdownInstance.open();
  }

  _onBlur() {
    this._hasFocus = false;
    this._dropdownInstance.close();
  }

  _executeSearch(value: string) {
    this._searchService.executeSearch(value.trim()).then((result: Array<string>) => {
      this._searchResult = result;
      // To have the resising of the dropdown as new macrotask after rendering the hmlt
      // we have to put it into the queue with the help of setTimeout
      setTimeout(() => this._dropdownInstance?.recalculateDimensions(), 0);
    });
  }

}
