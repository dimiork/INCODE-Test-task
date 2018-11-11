import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SearchUsers } from '../store/user.actions';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

	private _value = '';

	constructor(private store: Store) { }

	set value(value: string) {
    this._value = (value && value.trim()) || '';
    const action = new SearchUsers(this.value);
    this.store.dispatch(action);
  }
	 
	get value(): string { return this._value; }

  ngOnInit() {}

}


