import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router){
    // everytime a user logs in our out this observable (auth.user$) will emit a new value
    // In this case wont need to unsubscribe because its a single instance and when the user navigates away from the app, subscription is gone
    // But if you need to, then implement OnDestroy Interface..
    auth.user$.subscribe(user => {
      if(user){
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
