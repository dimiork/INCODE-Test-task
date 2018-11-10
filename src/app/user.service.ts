import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { USERS } from './user-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { };

  private usersUrl = '//api.jsonbin.io/b/5be42ea4e9336c4edc57f776';  // URL to web api

  selectedUser: User;

  selectUser(user: User) {
  	this.selectedUser = user;
  }

  getUsers(): Observable<User[]> {
  	return this.http.get<User[]>(this.usersUrl)
  }
}
