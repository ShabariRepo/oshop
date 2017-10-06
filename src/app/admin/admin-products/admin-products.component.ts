import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  // array of different types of products not instance of products just the types
  products: Product[];              // array of all products types
  subscription: Subscription;       // local subscription object to then dispose of with later
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  /* keep this subscription for the lifetime of this component
  the user may have more than one window open of different products chilling there
  if they are working on multiple windows we want to make sure that the changes 
  in other windows are reflected in this list so we implement onDestroy and unsubscribe
  */
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        
        this.initializeTable(products);
      });
   }

   // initialize data table
   private initializeTable(products: Product[]) {
        // declare table resource object and pass products
        // the offset 0 displays the reports to page 1
        // returns a promise then map it to a local variable array
        this.tableResource = new DataTableResource(products);
        this.tableResource.query({ offset:0 }).then(items => this.items = items);
        // total number of products returned from the server count()
        this.tableResource.count().then(count => this.itemCount = count);
   }

   // to reload items its from the html template
   /* when we relaod the page the reloadItems method is called immediately but the tableResource is not initialized yet
   */
   reloadItems(params) {
     if(!this.tableResource) return;
    this.tableResource.query(params).then(items => this.items = items);
   }

  // if there is a query then filter the products based on title or else just returl list
  // keep things kosher by keeping it lower case
  filter(query: string) {
    // the array of product types to show in the front end
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

      // after filtering through the array pass this into the resource product so table can resize
      this.initializeTable(filteredProducts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
