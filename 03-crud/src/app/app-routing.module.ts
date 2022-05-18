import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './users/pages/users-home/users-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: UsersHomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
