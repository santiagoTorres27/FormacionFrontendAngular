import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  messageFromParent = new Subject<string>();
  messageFromChild = new Subject<string>();

  sendMessageFromParent() {
    return this.messageFromParent.next('parent using service');
  }

  getMesssageFromParent() {
    return this.messageFromParent.asObservable();
  }

  sendMessageFromChild() {
    return this.messageFromChild.next('child using service');
  }

  getMessageFromChild() {
    return this.messageFromChild.asObservable();
  }

  //Observables
  msgChildObservable = new EventEmitter<string>();

  msgParentObservable = new EventEmitter<string>();

  constructor() {}
}
