import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    // auth state is an observable that represents the state of the current user..
    // the console log will display the state..
    afAuth.authState.subscribe(user => this.user = user);
   }

  logout(){
    this.afAuth.auth.signOut();
  }

}
