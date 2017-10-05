import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  // instead of the async task to unsubscribe for firebase you can also implement onDestroy in the constructor.. but this is easier
  // Convention to name all the observable variables with $ so that it shows as an observable and can bind without having duplicate var names..
  user$: Observable<firebase.User>;

  // Activated Route will have the route and will allow us to store the return URL queryParameter locally while google is authenticating and comes back..
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) {
    // auth state is an observable that represents the state of the current user..
    // will automatically unsubscribe from the observable when that component is destroyed..
    this.user$ = afAuth.authState;
   }

  login(){
    // hold the route parameter locally
    // Its safe to use the snapshot because there is no previous or next nav buttons which would change the snapshot..
    // Route params will not change with a single instanece of the login component in the DOM
    // if there is a queryParameter if NOT then use root '/'
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    // the signinwithredirect is for implementing oAuth
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  // use the switch map operator to map a firebase user object to an app User object
  get appUser$() : Observable<AppUser> {
    return this.user$
      .switchMap(user => this.userService.get(user.uid))    
  }

}
