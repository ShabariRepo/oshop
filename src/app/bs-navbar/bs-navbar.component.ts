import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  // Ahead of time compiler expects the fields we use in our template (html) as public
  // but now since we are not making it appear in the dom then make it private again
  constructor(private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

   logout(){
     this.auth.logout();
   }
}
