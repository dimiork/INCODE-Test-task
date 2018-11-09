import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '../models/user';

import { FetchUsers } from '../store/user.actions';

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
export class UserState {

  constructor(private http: HttpClient) { }

  @Selector()
  public static users(state: UserStateModel) {
    return state.users;
  }  

  @Action(FetchUsers)
  getUsers({ getState, setState }: StateContext<UserStateModel>) {
    const state = getState();
    let users: User[] = [];
    this.http.get<User[]>('/api/users.json').subscribe(user => {
      users = user;

      setState({
        ...state,
        users: users,
      });
    });
  }
}