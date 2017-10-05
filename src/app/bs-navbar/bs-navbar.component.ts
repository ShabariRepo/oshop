import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  // Ahead of time compiler expects the fields we use in our template (html) as public
  constructor(public auth: AuthService) {
   }

   logout(){
     this.auth.logout();
   }
}
