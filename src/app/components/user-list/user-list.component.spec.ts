import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { MaterialModule } from '../../material.module';
import { UserState } from '../../store/user.state';
import { FetchUsers } from '../../store/user.actions';
import { NgxsModule } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

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

  it('should run #ngOnInit()', async(() => {
    const result = component.ngOnInit();
    expect(result !== null).toBeTruthy();
  }));
});
