import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-light-switch-control',
  templateUrl: './light-switch-control.component.html',
  styleUrls: ['./light-switch-control.component.css'],
})
export class LightSwitchControlComponent implements OnInit {
  colorSelected: string = 'red';

  @Input() powerOn!: boolean;

  @Output() onColorEmitted: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // Emmits the selected color
  sendColor() {
    this.onColorEmitted.emit(this.colorSelected);
  }
}
