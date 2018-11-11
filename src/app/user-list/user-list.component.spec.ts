import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { MaterialModule } from '../material.module';
import { UserState } from '../store/user.state';
import { FetchUsers } from '../store/user.actions';
import { NgxsModule } from '@ngxs/store';
import { Store, Select } from '@ngxs/store';
import { HttpClientModule }    from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ 
        MaterialModule,
        NgxsModule.forRoot([ UserState ]),
        HttpClientModule,
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it load users from backend', async(() => {
    store.dispatch(new FetchUsers());
    store.selectOnce(state => {
      return state.users.users;
    }).subscribe(user => {
      expect(user).toBe(true);
    });
  }));

});


// import { async, TestBed } from '@angular/core/testing';

// describe('Zoo', () => {
//   let store: Store;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [NgxsModule.forRoot([ZooState])],
//     }).compileComponents();
//     store = TestBed.get(Store);
//   }));

//   it('it load users from backend', async(() => {
//     store.dispatch(new FetchAnimals());
//     store.selectOnce(state => state.users.users).subscribe(user => {
//       expect(user).toBe(true);
//     });
//   }));
// });