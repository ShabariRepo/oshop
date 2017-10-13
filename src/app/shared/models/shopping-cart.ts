import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    // set the itemsMap to what is passed in or empty object so that we do not get error and crash if null or no itemsMap passed in
    this.itemsMap = itemsMap || {};

    for (let productId in itemsMap){
      let item = itemsMap[productId];
      /* 
      '...' is the spread operator and is equivalent to assigning all object properties so the ... below is equivalent to:
      tite: item.title,
      imageUrl: item.imageUrl,
      price: item.price
      */
      // copy all the objects properties from the firebase into the shopping cart item
      this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
    }
  }

  // gets the sum of prices in the shopping cart
  get totalPrice() {
    let sum = 0;
    for(let productId in this.items)
      sum+= this.items[productId].totalPrice;
    return sum;
  }

  // get total items from a shopping cart
  get totalItemsCount() {
    let count = 0;
    for (let productId in this.itemsMap) 
      count += this.itemsMap[productId].quantity;
    return count;
  }

  // get the quantity of the cart if any products or cart exists
  getQuantity(product: Product) {    
    // got to the shopping cart items and property of which the key should be the same as the key from product
    let item = this.itemsMap[product.$key];

    // but there may not be anything in the item key (0) products in cart if not then return 0
    return item ? item.quantity : 0;
  }
}