import { Product } from './models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';

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
  // decorating the async keyword means the method returns a promise
  private async getOrCreateCartId() {
    // if you misspell this cart Id then it will create multiple cart ids in the db and make new values for cartId in developer tools
    let cartId = localStorage.getItem('cartId');

    // change the method to return the cartId instead of a whole object which may take longer
    // if we do have cart id then return it if not then...
    if (cartId) return cartId;

    // async method will get the result of the create in a separate thread
    let result = await this.create();
    localStorage.setItem('cartId', result.key);

    // then add the product to cart
    return result.key;
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();

    // get reference to the product in the shopping cart
    // the products in the shopping cart is in an array
    // its an observable for a shopping cart item
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);

    // subscribe to this observable to read it and dont want to unsubscribe later so to avoid the hassle use the take rxjs import
    // if the item exists then update the count else add first    
    item$.take(1).subscribe(item => {
      if (item.$exists()) item$.update({ quantity: item.quantity + 1 });
      else item$.set({ product: product, quantity: 1 });
    });
  }
}