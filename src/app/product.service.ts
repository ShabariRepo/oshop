import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  // push returns a promise so have to say return
  create(product){
    return this.db.list('/products').push(product);
  }
  
  // get all the products from the db
  getAll(){
    return this.db.list('/products');
  }

  // get a specific product from the db using product Id
  getProduct(productId){
    return this.db.object('/products/' + productId);
  }

  // update the product editing
  // why not add just product and access the id from there?
    // firebase doesnt like it when you pass an object in the update() function that has an ID property
    // because by definition the id property should not be changed so it will give a runtime error
  updateProduct(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }
}
