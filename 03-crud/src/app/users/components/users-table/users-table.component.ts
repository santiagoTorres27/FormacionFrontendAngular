import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'isSubscribed',
    'country',
    'city',
    'actions',
  ];

  dataSource: User[] = [];

  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUsers();
    /*  this.usersService.getRequest().subscribe((msg) => {
      this.getUsers();
    }); */
    this.usersService.updateDataEmitter.subscribe(() => {
      this.getUsers();
    });
  }

  editUser(id: string) {
    this.usersService.userId.emit(id);
  }

  deleteUser(id: string) {
    const dialog = this.matDialog.open(DeleteDialogComponent, {
      width: '300px',
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.deleteUser(id).subscribe(() => {
          this.getUsers();
          this.openSnackbar('El usuario se ha eliminado con éxito!');
        });
      }
    });
  }

  getUsers() {
    this.usersService
      .getUsers()
      .subscribe((users) => (this.dataSource = users));
  }

  openSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'OK', {
      duration: 2500,
    });
  }
}
