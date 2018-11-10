import { User } from '../models/user';

export class FetchUsers {
  static readonly type = '[Users] Fetch Users';
}

export class SearchUsers {
    static readonly type = '[Users] Search Users';

    constructor(public keyword: string) {}
}

export class SelectUser {
    static readonly type = '[Users] Select User';

    constructor(public user: User) {}
}