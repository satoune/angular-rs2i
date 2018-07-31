import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {



  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }


  /**
  * add item to collection
  */


  /**
   * get Collection items
   */
  get collection(): Item[] {
    return this._collection;
  }

  /**
   * set Collection items
   */
 set collection(col: Item[]) {
    this._collection = col;
  }

   /**
   * get one item from Collection
   */

   /**
    * update item in collection
    */
   update(arg0: any): any {
    // throw new Error("Method not implemented.");
  }
    /**
     * delete item from collection
     */
}
