import { Component, OnInit } from '@angular/core';
import { PushContentService } from './push-content.service';

/** A component desiged to wrap the content to be pushed by the side nav. */
@Component({
  selector: 'mui-push-content',
  template: '<div class="main" [class.main-pushed]="_pushed"><ng-content></ng-content></div>'
})
export class PushContentComponent implements OnInit {

  /** A flag indicating if the content is pushed or not. */
  _pushed = false;

  constructor(private _pushContentService: PushContentService) { }

  ngOnInit(): void {
    // Subscribe to the push and unpush events and adjust the main content in accordance to.
    this._pushContentService.onPushContent().subscribe(() => this._pushed = true);
    this._pushContentService.onUnpushContent().subscribe(() => this._pushed = false);
  }

  /** A flag indicating if the content ist pushed or not. */
  get isPushed(): boolean {
    return this._pushed;
  }

}
