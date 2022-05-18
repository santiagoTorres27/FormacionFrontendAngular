import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [UsersFormComponent, UsersTableComponent, UsersHomeComponent, DeleteDialogComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [UsersHomeComponent],
})
export class UsersModule {}
