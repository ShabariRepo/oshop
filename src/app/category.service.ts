import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  // return list of categories from the db
  getAll() {
    // the second argument is so that we can order the list by w.e
    // this object should have a property called query which is another object
    // and the sorting happens in that object
    // child property is the name the one level lower property
    return this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
