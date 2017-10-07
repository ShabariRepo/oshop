import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart { 
  constructor(public items: ShoppingCartItem[]) {}
  
  // get total items from a shopping cart
  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items) 
      count += this.items[productId].quantity;
    return count;
  }
}