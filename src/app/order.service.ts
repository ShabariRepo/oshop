import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService, private db: AngularFireDatabase) { }

  // store order in db
  // returns a promise so return to the outside so if success return to order success
  async placeOrder(order){
    let result = await this.db.list('/orders').push(order);
    // clear the cart after order posting
    this.shoppingCartService.clearCart();
    return result;
  }
}
