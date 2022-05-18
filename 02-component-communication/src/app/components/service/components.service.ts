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

  sendParentMsg(msg: string) {
    return this.parentMsgObservable.next(msg);
  }

  getParentMsg() {
    return this.parentMsgObservable.asObservable();
  }

  //Child
  childMsgObservable = new Subject<string>();

  sendChildMsg(msg: string) {
    return this.childMsgObservable.next(msg);
  }

  getChildMsg() {
    return this.childMsgObservable.asObservable();
  }

  constructor() {}
}
