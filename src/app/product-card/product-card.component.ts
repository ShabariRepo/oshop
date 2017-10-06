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

  constructor(private cartService: ShoppingCartService) { }

  // add the product to cart and invoke shopping cart service methods
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}