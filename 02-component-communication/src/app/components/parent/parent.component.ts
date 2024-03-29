import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../service/components.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message = '';
  messageOnScreen = '';

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    //Subscribe to childMsg Observable
    this.componentsService.getChildMsg().subscribe((msg) => {
      this.messageOnScreen = msg;
    });

    //Subscribe to childMsg EventEmitter
    this.componentsService.childMsg.subscribe((msg) => {
      this.messageOnScreen = msg;
    });
  }

  //Get msg from child using output
  getChildMsg(msg: string) {
    this.messageOnScreen = msg;
  }

  //Methods to send msg to the child
  sendMsgInput() {
    this.message = 'parent using input property';
  }

  sendMsgService() {
    this.componentsService.parentMsg.emit('parent using service');
    this.message = '';
  }

  sendMsgObservable() {
    this.componentsService.sendParentMsg('parent using observable');
    this.message = '';
  }
}
