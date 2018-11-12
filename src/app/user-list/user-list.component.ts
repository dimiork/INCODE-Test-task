import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchUsers, SelectUser } from '../store/user.actions';
import { UserState } from '../store/user.state';

import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(UserState.loading) loading$: Observable<boolean>;
  @Select(UserState.users) users$: Observable<User[]>;
  @Select(UserState.filteredUsers) filteredUsers$: Observable<User[]>;
  @Select(UserState.selectedUser) selectedUser$: Observable<User>;

  ngOnInit() {
  	this.store.dispatch(new FetchUsers());
  }

  onSelect(user: User): void {
    const action = new SelectUser(user);
  	this.store.dispatch(action);
  }
}
