import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../service/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  //Receive msg to the parent
  @Input()
  message: string = '';

  messageOnScreen = '';

  //Send the message to the parent
  @Output()
  onMessageWithOutput: EventEmitter<string> = new EventEmitter();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    //Get msg from the service
    this.communicationService.getMesssageFromParent().subscribe((msg) => {
      this.messageOnScreen = msg;
    });

    //Get msg from the service - observable
    this.communicationService.msgParentObservable.subscribe((msg) => {
      this.messageOnScreen = msg;
    });
  }

  //Methods to send the msg to the parent
  sendMessageUsingService() {
    this.communicationService.sendMessageFromChild();
  }

  sendMessageUsingOutput() {
    this.onMessageWithOutput.emit('child using output event');
  }

  sendMessageUsingObservable() {
    this.communicationService.msgChildObservable.emit('child using observable');
  }
}
