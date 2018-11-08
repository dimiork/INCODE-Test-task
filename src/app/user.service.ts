import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { USERS } from './user-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { };

  selectedUser: User;

  selectUser(user: User) {
  	this.selectedUser = user;
  }

  getUsers(): Observable<User[]> {
  	return of(USERS);
  }
}
