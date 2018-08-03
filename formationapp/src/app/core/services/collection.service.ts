import { Injectable } from '@angular/core';
 import { Item } from '../../shared/interfaces/item';
// import { COLLECTION } from '../collection';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private itemsCollection: AngularFirestoreCollection<Item>;

  private _collection: Observable<Item[]>;
  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // this.collection = COLLECTION;

    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.valueChanges();
    // this.http.get [Symbol].....
  }



  /**
   * get Collection items
   */
  get collection(): Observable<Item[]> {
    return this._collection;
  }

  /**
   * set Collection items
   */
 set collection(col: Observable<Item[]>) {
     this._collection = col;
  }

   /**
   * get one item from Collection
   */

   /**
   * add item in collection
   */
  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  /**
   * update item in collection
   */
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  /**
   * delete item in collection
   */
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }
}
