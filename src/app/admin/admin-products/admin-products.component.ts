import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  // array of different types of products not instance of products just the types
  products: any[];              // array of all products types
  filteredProducts: any[];      // the array of product types to show in the front end
  subscription: Subscription;   // local subscription object to then dispose of with later
  
  /* keep this subscription for the lifetime of this component
  the user may have more than one window open of different products chilling there
  if they are working on multiple windows we want to make sure that the changes 
  in other windows are reflected in this list so we implement onDestroy and unsubscribe
  */
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => this.filteredProducts = this.products = products);
   }

  // if there is a query then filter the products based on title or else just returl list
  // keep things kosher by keeping it lower case
  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
