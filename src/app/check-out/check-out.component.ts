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
  cartSubscription: Subscription;
  userId: string;
  userSubscription: Subscription;
  
  constructor (private shoppingCartService: ShoppingCartService, private orderService: OrderService, private authService: AuthService){

  }

  // need a shopping cart 
  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    // uid is the unique id that firebase assigns to its users
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  placeOrder() {
    // console.log(this.shipping);
    // create an order object
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(i => {
        return{
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            unitPrice: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
    };

    this.orderService.storeOrder(order);
  }    
}
