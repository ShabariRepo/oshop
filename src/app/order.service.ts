import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  // store order in db
  // returns a promise so return to the outside so if success return to order success
  storeOrder(order){
    return this.db.list('/orders').push(order);
  }
}
