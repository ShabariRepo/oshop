import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {}; /* if we do not set this to empty object then the form will show a 
  null reference exception because it also uese the getProduct() which actually returns a product*/
  id;

  // no private because for now we  are only going to use it in the constructor and not anywhere else in the class
  // private product service because we are going to use it in our save method
  // add private to category service for readability
  // activated route = allows us to easily read the id parameter from the 'route snapshot'
    // no need to subscribe to the param map observable which would load a different product in the same form using previous and next ..etc..
    // so the user always has to go to the product list to look at a new product
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    // get the id parameter from the snapshot
    this.id = this.route.snapshot.paramMap.get('id');
    
    // if we have an id then we want to read the product from firebase
      // we need to subscribe to the observable to read the product
    if(this.id){
      this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p);
    }
   }

   save(product){
     // if we have an id then update the product updateProduct()
     if (this.id) this.productService.updateProduct(this.id, product);
     else this.productService.create(product);

     // take the users to the products list after adding the product to DB
     this.router.navigate(['/admin/products']);
   }

  ngOnInit() {
  }

}
