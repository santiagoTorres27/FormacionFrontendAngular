import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidBarComponent } from './pages/covid-bar/covid-bar.component';
import { CovidDoughnutComponent } from './pages/covid-doughnut/covid-doughnut.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CovidBarComponent, CovidDoughnutComponent],
  imports: [CommonModule, CovidRoutingModule, NgChartsModule],
})
export class CovidModule {}
