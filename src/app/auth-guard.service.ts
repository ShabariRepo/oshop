import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){
    // if user is logged in return true if not return false and navigate them to login page
    // if you just use subscribe then AuthGuard will improperly implement canActivate
    // Needs to returl a boolean or a promise of a boolean
    // Convert the user into a boolean promise then angular will internally subscribe and destroy..
    // Mapping an observable of firebase user to an observable of boolean
    return this.auth.user$.map(user => {
      if (user) return true;

      // Navigate takes in a few arguments, the second is object of queryParams which is a url parameter
      // the type is of object and state has the url property that has the current url which we use to return
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }

}
