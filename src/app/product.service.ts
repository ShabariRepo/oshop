import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    // push returns a promise so have to say return
    return this.db.list('/products').push(product);
  }

  getAll(){
    // get all the products from the db
    return this.db.list('/products');
  }
}
