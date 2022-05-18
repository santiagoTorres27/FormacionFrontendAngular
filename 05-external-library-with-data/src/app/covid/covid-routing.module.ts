import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidBarComponent } from './pages/covid-bar/covid-bar.component';
import { CovidDoughnutComponent } from './pages/covid-doughnut/covid-doughnut.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bar',
        component: CovidBarComponent,
      },
      {
        path: 'doughnut',
        component: CovidDoughnutComponent,
      },
      {
        path: '**',
        redirectTo: 'bar',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidRoutingModule {}
