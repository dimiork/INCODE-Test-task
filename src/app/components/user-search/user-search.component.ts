import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Store, Select } from '@ngxs/store';
import { SearchUsers } from '../../store/user.actions';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchField$: FormControl;
  searchForm: FormGroup;
  constructor (private store: Store, private fb: FormBuilder) {
    this.searchField$ = new FormControl();
    this.searchForm = fb.group({search: this.searchField$});

    this.searchField$
        .valueChanges
        .pipe(
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(term => this.store.dispatch(new SearchUsers(term))),
        ).subscribe();

  }

  ngOnInit() { }

}


