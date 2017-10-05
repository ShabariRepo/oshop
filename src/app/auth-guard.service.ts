import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(){
    // if user is logged in return true if not return false and navigate them to login page
    // if you just use subscribe then AuthGuard will improperly implement canActivate
    // Needs to returl a boolean or a promise of a boolean
    // Convert the user into a boolean promise then angular will internally subscribe and destroy..
    // Mapping an observable of firebase user to an observable of boolean
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    });
  }

}
