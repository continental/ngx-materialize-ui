import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/** A service providing methods to interact with the push content. */
@Injectable({
  providedIn: 'root'
})
export class PushContentService {

  // Create two subject for pushing and unpushing the content
  private _pushContentSubject = new Subject<void>();
  private _unpushContentSubject = new Subject<void>();

  /** Pushes the content to the side to make space for a side nav. */
  pushContent() {
    this._pushContentSubject.next();
  }

  /** Brings back the content to the border of the box. */
  unpushContent() {
    this._unpushContentSubject.next();
  }

  /** An observable which can be subscribed to if you need to get informed about the push event. */
  onPushContent(): Observable<void> {
    return this._pushContentSubject.asObservable();
  }

  /** An observable which can be subscribed to if you need to get informed about the unpush event. */
  onUnpushContent(): Observable<void> {
    return this._unpushContentSubject.asObservable();
  }

}
