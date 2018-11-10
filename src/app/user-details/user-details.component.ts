import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from '../store/user.state';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() {};

  @Select(UserState.selectedUser) selectedUser$: Observable<User>;

  ngOnInit() {};

}
