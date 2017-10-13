import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product : Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  // add the product to cart and invoke shopping cart service methods
  addToCart() {
    this.cartService.addToCart(this.product);
  }

  // remove product from cart
  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  
}
