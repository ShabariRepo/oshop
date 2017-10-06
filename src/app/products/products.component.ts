import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;         // product observable

  constructor(productService: ProductService) {
    // get all the products using the product service injection
    this.products$ = productService.getAll();
   }
}
