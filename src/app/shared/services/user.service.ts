import { AppUser } from '../models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  // inject angular fire DB object
  constructor(private db: AngularFireDatabase) { }

  // In the db it will be saved as the /users/id
  // can also call the set method but update you can add lots of fields instead of one
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // to get the user data from the DB for a id given in..
  // The : represents what the method returns and this one returns the FB object observable of type AppUser..
  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
