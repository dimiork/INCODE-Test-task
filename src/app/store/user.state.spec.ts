import { async, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { NgxsModule, Store } from '@ngxs/store';
import { FetchUsers, SelectUser, SearchUsers } from './user.actions';
import { UserState, userStateDefaults } from './user.state';
import { User, generateMockUser } from '../models/user';

describe('Users State', () => {
  let store: Store;
  const mockUser: User = generateMockUser();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([UserState]),
        HttpClientModule
      ],
    }).compileComponents();

    store = TestBed.get(Store);
    store.reset({ users: userStateDefaults });
  }));

  it('[action] it should fetch users', async(() => {
    store.dispatch(new FetchUsers()).subscribe(state => {
      const usersLength: number = state.users.users.length;
      expect(usersLength).toBeGreaterThan(1);
    });
  }));

  it('[action] it should select a user', async(() => {
    store.dispatch(new SelectUser(mockUser));
    const actualSelectedUser = store.selectSnapshot(
      state => state.users.selectedUser
    );
    expect(actualSelectedUser).toEqual(mockUser);
  }));

  it('[action] it should find a user by keyword', async(() => {
    store.dispatch(new FetchUsers()).subscribe(state => {
      const keyword: string = 'liana';
      store.dispatch(new SearchUsers(keyword));
      const [actualSearchedUser] = store.selectSnapshot(
        state => state.users.filteredUsers
      );
      expect(actualSearchedUser).toEqual(mockUser);
    });
  }));

});
