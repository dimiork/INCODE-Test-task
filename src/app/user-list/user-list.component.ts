import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchUsers } from '../store/user.actions';
import { UserState } from '../store/user.state';

import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private store: Store) { }

  @Select(UserState.users) users$: Observable<User[]>;

  ngOnInit() {
  	// this.getUsers();
  	this.store.dispatch(new FetchUsers());
  }

  // users: User[];

  onSelect(user: User): void {
  	this.userService.selectUser(user);
  }

  // getUsers(): void {
  // 	this.userService.getUsers().subscribe(users => this.users = users);
  // }

}
