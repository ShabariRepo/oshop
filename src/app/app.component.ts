import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    // everytime a user logs in our out this observable (auth.user$) will emit a new value
    // In this case wont need to unsubscribe because its a single instance and when the user navigates away from the app, subscription is gone
    // But if you need to, then implement OnDestroy Interface..
    auth.user$.subscribe(user => {

      // if no user then return
      // else save the user and redirect them
      if (!user) return;
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');

      if(!returnUrl) return;
      
      localStorage.removeItem('returnUrl');      
      router.navigateByUrl(returnUrl);
    });
  }
}
