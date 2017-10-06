import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  // create an entry under the shopping cart table in db
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  // keep api simple so not accessible from outside
  // only focus is to get a reference to the shopping cart and does not post products to cart
  private async getOrCreateCart() {
    // if you misspell this cart Id then it will create multiple cart ids in the db and make new values for cartId in developer tools
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      // async method will get the result of the create in a separate thread
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      // then add the product to cart
      return this.getCart(result.key);
    }
    
    return this.getCart(cartId);
  }
}
