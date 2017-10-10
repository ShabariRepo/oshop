import { Router } from '@angular/router';
import { Order } from './../models/order';
import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {}; 
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  
  constructor (private router: Router, private shoppingCartService: ShoppingCartService, private orderService: OrderService, private authService: AuthService){

  }

  // need a shopping cart 
  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    // uid is the unique id that firebase assigns to its users
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  async placeOrder() {
    // console.log(this.shipping);
    // create an order object
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.storeOrder(order);
    // wait for the result of the store order promise, then upon completion navigate to order-success page
    // in the navigate the first element of the array is the location or destination, then its the property
    // notice the second is not $key, $key is used when you read a node from Firebase
    // key is used when you store something in firebase
    // firebase returns a newly generated ID in this key property
    this.router.navigate(['/order-success', result.key]);
  }    
}
