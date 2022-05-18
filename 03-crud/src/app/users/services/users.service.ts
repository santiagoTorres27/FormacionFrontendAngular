import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'http://localhost:3000';

  updateData = new Subject<boolean>();

  sendRequest() {
    this.updateData.next(true);
  }

  getRequest() {
    return this.updateData.asObservable();
  }

  //EventEmitter
  userId = new EventEmitter<string>();
  updateDataEmitter = new EventEmitter<boolean>();
  // End Emitter

  constructor(private http: HttpClient) {}

  // Get all the users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      tap(() => {
        this.getUsers();
      })
    );
  }

  // Get single user
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  // Add user
  addUsers(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  // Delete user
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`);
  }

  //Update user
  updateUser(user: User, userId: string): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${userId}`, user);
  }
}
