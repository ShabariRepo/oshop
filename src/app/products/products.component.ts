import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];         // product observable
  filteredProducts: Product[];
  category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService) {

    // get our firstt observable  
    // get all the products and categories using the product service injection
    productService.getAll().switchMap(products => {
        this.products = products;
        // switch our first observable which is the list of products into the second observable queryParamMap
        return route.queryParamMap;
      })

    // then subscribe to the second observable
    // get the query params from the link but cannot use the snapshot because the route parameters can change from the main products page
    .subscribe(params => {
      this.category = params.get('category');

      // filtering based on category
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) : this.products;
    });
  }
}
