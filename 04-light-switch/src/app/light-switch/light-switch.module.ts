import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { FormsModule } from '@angular/forms';
import { LightSwitchControlComponent } from './light-switch-control/light-switch-control.component';

@NgModule({
  declarations: [LightSwitchComponent, LightSwitchControlComponent],
  imports: [CommonModule, FormsModule],
  exports: [LightSwitchComponent],
})
export class LightSwitchModule {}
