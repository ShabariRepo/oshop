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
}
