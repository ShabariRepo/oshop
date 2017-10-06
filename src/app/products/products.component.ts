import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;         // product observable
  categories$;       // categories observable

  constructor(productService: ProductService, categoryService: CategoryService) {
    // get all the products and categories using the product service injection
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();
   }
}
