import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'covid',
    loadChildren: () =>
      import('./covid/covid.module').then((m) => m.CovidModule),
  },
  {
    path: '**',
    redirectTo: 'covid',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
