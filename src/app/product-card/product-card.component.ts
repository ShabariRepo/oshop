import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product : Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  // add the product to cart and invoke shopping cart service methods
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // get the quantity of the cart if any products or cart exists
  getQuantity() {
    // want to make sure we even have a shopping cart first or we are going to get a null reference exception
    // because there will be a small delay from waiting for firebase to return the cart so page will load before
    // and initialla it will be empty so.. need to do below to avoid null ref
    if(!this.shoppingCart) return 0;

    // got to the shopping cart items and property of which the key should be the same as the key from product
    let item = this.shoppingCart.items[this.product.$key];

    // but there may not be anything in the item key (0) products in cart if not then return 0
    return item ? item.quantity : 0;
  }
}