import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];         // product observable
  filteredProducts: Product[];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();

    // populate products
    this.populateProducts();    
  }

  private applyFilter(){
    // filtering based on category
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) : this.products;
  }

  // Populate the products 
  private populateProducts(){
    // get our firstt observable  
    // get all the products and categories using the product service injection
    this.productService.getAll().switchMap(products => {
      this.products = products;
      // switch our first observable which is the list of products into the second observable queryParamMap
      return this.route.queryParamMap;
    })

      // then subscribe to the second observable
      // get the query params from the link but cannot use the snapshot because the route parameters can change from the main products page
      .subscribe(params => {
        this.category = params.get('category');
        
        this.applyFilter();
      });
  }
}
