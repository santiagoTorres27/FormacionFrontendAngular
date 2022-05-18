import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightSwitchModule } from './light-switch/light-switch.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LightSwitchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
