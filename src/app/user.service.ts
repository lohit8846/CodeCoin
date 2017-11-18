import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private currentUser: any;

  constructor(private http: Http) {
  }

  getCurrentUser() {
    return this.currentUser
      ? Observable.of(this.currentUser) // wrap cached value for consistent return value
      : this.http.get('localhost:5000/user/getUser')
      .map(res => res.json())
      .do(data => {
        this.currentUser = data; // cache it for next call
      })
      .catch(error => Observable.throw(error));
  }

  updateUser() {
    this.logoutUser();
    return this.getCurrentUser();
  }

  logoutUser() {
    this.currentUser = null;
  }

}
