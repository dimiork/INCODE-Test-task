import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
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

export const userStateDefaults: UserStateModel = {
    users: [],
    filteredUsers: [],
    selectedUser: null,
    loading: true
  };

@State<UserStateModel>({
  name: 'users',
  defaults: userStateDefaults
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
  fetchUsers({ getState, setState }: StateContext<UserStateModel>) {
    const state = getState();
    const users: User[] = [];
    return this.userService.getUsers().pipe(map(x => {
      setState({
        ...state,
        users: x,
        filteredUsers: x,
        loading: false
      });
    }));
  }

  @Action(SearchUsers)
  SearchUsers({ getState, setState }: StateContext<UserStateModel>, { keyword }) {
    const state = getState();
    let users: User[] = [];
    if (!keyword) {
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
