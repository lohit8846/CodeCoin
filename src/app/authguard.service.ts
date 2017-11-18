import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private user: UserService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.user.getCurrentUser().subscribe(
      res => {
        return true
      },
      err => {
        return false
      }
    )
  }
}
