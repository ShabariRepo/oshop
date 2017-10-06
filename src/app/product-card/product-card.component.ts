import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product : Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    // if you misspell this cart Id then it will create multiple cart ids in the db and make new values for cartId in developer tools
    let cartId = localStorage.getItem('cartId');
    if(!cartId) {
      // if no cart id exists then create it via firebase service
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);

        // then add the product to cart

      });
    } else {
      // add product to cart

    }
  }
}
