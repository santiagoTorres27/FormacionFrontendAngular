import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../service/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  message = '';
  messageOnScreen = '';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    //Get msg from the service
    this.communicationService.getMessageFromChild().subscribe((msg) => {
      this.messageOnScreen = msg;
    });

    //Get msg from service - observable
    this.communicationService.msgChildObservable.subscribe((msg) => {
      this.messageOnScreen = msg;
    });
  }

  //Get msg from child using output
  getMessageWithOutput(msg: string) {
    this.messageOnScreen = msg;
  }

  //Methods to send msg to the child
  sendMessageUsingService() {
    this.communicationService.sendMessageFromParent();
    this.message = '';
  }

  sendMessageUsingInput() {
    this.message = 'parent using input property';
  }

  sendMessageUsingObservable() {
    this.communicationService.msgParentObservable.emit(
      'parent using observable'
    );
    this.message = '';
  }
}
