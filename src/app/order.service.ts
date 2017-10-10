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

  // get all the orders form firebase
  getOrders(){
    return this.db.list('/orders');
  }

  // get all the orders for a particular user
  // in firebase when you want to get something specific back then use the query and always use orderByChild and select the node
  // for the second one you can use comparison stuff like equalTo or startAt / endAt
  getOrdersByUser(userId: string){
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }
}
