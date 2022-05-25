import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Light } from '../interfaces/light.interface';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss'],
})
export class LightSwitchComponent implements OnInit {
  isPowerOn: boolean = false;
  color: string = 'red';

  //Create array of lights
  lights: Light[] = [
    {
      name: 'red',
      class: 'light',
    },
    {
      name: 'yellow',
      class: 'light',
    },
    {
      name: 'green',
      class: 'light',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Receive color from child component (light-switch-control)
  receiveColor(e: string) {
    this.color = e;
    this.turnOnLight();
  }

  // Turn the light switch on and off
  turnOn() {
    this.isPowerOn = !this.isPowerOn;
    this.isPowerOn ? this.turnOnLight() : this.turnOff();
  }

  // Turn the light selected
  turnOnLight() {
    this.lights.forEach((light) => {
      if (light.name === this.color) {
        light.class += ` ${this.color}-on`;
      } else {
        light.class = 'light';
      }
    });
  }

  // Turn off all the lights
  turnOff() {
    this.lights.forEach((light) => {
      light.class = 'light';
    });
  }
}
