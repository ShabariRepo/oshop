import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    // Start the user$ observable
    // Then Map and switch to the new Observable returned from the user service get method
    // To get the app user object and mapping the user based on the isAdmin property
    // Unlike the map method, the switch map does mapping as well as switches the type to specified..
    return this.auth.user$.switchMap(user => this.userService.get(user.uid)).map(appUser => appUser.isAdmin);
  }
}
