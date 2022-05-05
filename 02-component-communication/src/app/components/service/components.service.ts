import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  // EventEmitters
  parentMsg = new EventEmitter<string>();
  childMsg = new EventEmitter<string>();

  // Observables
  // Parent
  parentMsgObservable = new Subject<string>();

  sendParentMsg() {
    return this.parentMsgObservable.next('parent using observable');
  }

  getParentMsg() {
    return this.parentMsgObservable.asObservable();
  }

  //Child
  childMsgObservable = new Subject<string>();

  sendChildMsg() {
    return this.childMsgObservable.next('child using observable');
  }

  getChildMsg() {
    return this.childMsgObservable.asObservable();
  }

  constructor() {}
}
