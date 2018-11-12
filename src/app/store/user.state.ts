import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '../models/user';
import { UserService } from '../user.service';

import { FetchUsers, SearchUsers, SelectUser } from '../store/user.actions';

export interface UserStateModel {
  users: User[];
  filteredUsers: User[];
  selectedUser: User;
  loading: boolean;
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
    filteredUsers: [],
    selectedUser: null,
    loading: true
  }
})
export class UserState {

  constructor(private userService: UserService) { }

  @Selector()
  public static loading(state: UserStateModel) {
    return state.loading;
  }

  @Selector()
  public static users(state: UserStateModel) {
    return state.users;
  }

  @Selector()
  public static filteredUsers(state: UserStateModel) {
    return state.filteredUsers;
  }

  @Selector()
  public static selectedUser(state: UserStateModel) {
    return state.selectedUser;
  }

  @Action(SelectUser)
  selectUser({getState, setState}: StateContext<UserStateModel>, { user }) {
    const state = getState();
    setState({
      ...state,
      selectedUser: user
    });
  }

  @Action(FetchUsers)
  getUsers({ getState, setState }: StateContext<UserStateModel>) {
    const state = getState();
    let users: User[] = [];
    this.userService.getUsers().subscribe(user => {
      users = user;

      setState({
        ...state,
        users: users,
        filteredUsers: users,
        loading: false
      });
    });
  }

  @Action(SearchUsers)
    SearchUsers({ getState, setState }: StateContext<UserStateModel>, { keyword }) {
      const state = getState();
      let users: User[] = [];
      if(!keyword) {

        users = state.users;
      } else {

        users = state.users.filter(user => {
          return Object.keys(user).some(i => {
            return Object.keys(user[i]).some(j => {
              return user[i][j].toLowerCase().includes(keyword.toLowerCase());
            });
          });
        });

      }
      
      setState({
        ...state,
        filteredUsers: users,
      });

    }
}