import { async, TestBed } from '@angular/core/testing';

import { concatMap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule, Store } from '@ngxs/store';
import { FetchUsers, SelectUser } from './user.actions';
import { UserState, userStateDefaults } from './user.state';
import { User, generateMockUser, generateMockUsers } from '../models/user';

describe('Users State', () => {
  let store: Store;
  const user: User = generateMockUser();
  const users: User[] = generateMockUsers();

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

  // it('it should fetch users without async/await', (done) => {
  //   store.dispatch(new FetchUsers()).pipe(
  //     concatMap(() => store.selectOnce(state => state.users.users))
  //   ).subscribe(user3 => {
  //     console.log('wo async/await', user3); // []
  //     expect(user3).toBe(true);
  //     done();
  //   });
  // });

  // it('[action] it should fetch users in angular way', async(() => {
  //   store.dispatch(new FetchUsers());
  //   store.selectOnce(state => state.users.users).subscribe(user2 => {
  //     console.log('angular way', user2); // []
  //     expect(user2).toBe(true);
  //   });
  // }));

  // it('[action] it should fetch users in angular way 2', (doneFn) => {
  //   store.dispatch(new FetchUsers()).subscribe(user5 => {
  //     store.selectOnce(state => state.users).subscribe(user6 => {
  //       console.log('angular way 2', user5, user6);
  //       expect(user6).toBe(true);
  //       doneFn();
  //     })
  //   });
  // });

  it('[action] it should select a user', async(() => {
    store.dispatch(new SelectUser(user));

    const actualSelectedUser = store.selectSnapshot(
      state => state.users.selectedUser
    );
    expect(actualSelectedUser).toEqual(user);
  }));

});
