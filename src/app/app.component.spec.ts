import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSearchComponent } from './user-search/user-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserState } from './store/user.state';
import { NgxsModule } from '@ngxs/store';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule }    from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserSearchComponent,
        UserDetailsComponent,
        UserListComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        NgxsModule.forRoot([ UserState ]),
        HttpClientModule,
      ],
      // schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'usersFinder'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('usersFinder');
  });

});
