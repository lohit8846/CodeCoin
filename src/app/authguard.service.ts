import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private user: UserService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return  this.user.getCurrentUser()
      .map(res => Observable.of(true))
      .catch(error => Observable.of(false));
  }
}
