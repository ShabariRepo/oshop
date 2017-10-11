import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  userSubscription: Subscription;

  constructor (private router: Router, private orderService: OrderService, private authService: AuthService){
    
      }

  ngOnInit() {
    // uid is the unique id that firebase assigns to its users
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }  

  async placeOrder() {
    // console.log(this.shipping);
    // create an order object
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    
    // wait for the result of the store order promise, then upon completion navigate to order-success page
    // in the navigate the first element of the array is the location or destination, then its the property
    // notice the second is not $key, $key is used when you read a node from Firebase
    // key is used when you store something in firebase
    // firebase returns a newly generated ID in this key property
    this.router.navigate(['/order-success', result.key]);
  }  

}
