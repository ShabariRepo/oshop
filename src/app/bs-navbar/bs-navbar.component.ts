import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  // instead of the async task to unsubscribe for firebase you can also implement onDestroy in the constructor.. but this is easier
  // Convention to name all the observable variables with $ so that it shows as an observable and can bind without having duplicate var names..
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    // auth state is an observable that represents the state of the current user..
    // will automatically unsubscribe from the observable when that component is destroyed..
    this.user$ = afAuth.authState;
   }

  logout(){
    this.afAuth.auth.signOut();
  }

}
