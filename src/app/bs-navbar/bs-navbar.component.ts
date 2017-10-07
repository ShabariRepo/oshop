import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number;

  // Ahead of time compiler expects the fields we use in our template (html) as public
  // but now since we are not making it appear in the dom then make it private again
  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { 
  }

   logout(){
     this.auth.logout();
   }

   // because shopping cart has async methods that are referenced here need to implement ngOnInit
   async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    // get cart from shopping cart to display number
    // returns an observable
    // also don't need to unsubscribe since we have a single instance of the navBar Component in the dom through out the lifetime of the app
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items)
        this.shoppingCartItemCount += cart.items[productId].quantity;
      
    });
   }
}
