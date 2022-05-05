import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentsService } from '../service/components.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  messageOnScreen = '';

  //Receive msg to the parent
  @Input() message: string = '';

  //Send the message to the parent
  @Output() childMsg: EventEmitter<string> = new EventEmitter();

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    //Subscribe to parentMsg Observable
    this.componentsService.getParentMsg().subscribe((msg) => {
      this.messageOnScreen = msg;
    });

    //Subscribe to parentMsg EventEmitter
    this.componentsService.parentMsg.subscribe((msg) => {
      this.messageOnScreen = msg;
    });
  }

  //Methods to send the msg to the parent
  sendMsgService() {
    this.componentsService.childMsg.emit('child using service');
  }

  sendMsgOutput() {
    this.childMsg.emit('child using output event');
  }

  sendMsgObservable() {
    this.componentsService.sendChildMsg();
  }
}
