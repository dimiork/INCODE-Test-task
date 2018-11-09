import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SearchUsers } from '../store/user.actions';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

	value: string;

  constructor(private store: Store) { }

  ngOnInit() {}

  onKey(event: KeyboardEvent) {
    this.value = (<HTMLInputElement>event.target).value;
    this.store.dispatch(new SearchUsers({queryText: this.value}));
  }

}
