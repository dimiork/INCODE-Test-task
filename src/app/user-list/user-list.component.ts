import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getUsers();
  }

  users: User[];

  onSelect(user: User): void {
  	this.userService.selectUser(user);
  }

  getUsers(): void {
  	this.userService.getUsers().subscribe(users => this.users = users);
  }

}
