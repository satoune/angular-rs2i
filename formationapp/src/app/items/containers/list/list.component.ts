import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  extends AbstractComponent implements OnDestroy {

  constructor(collectionService: CollectionService) {
    super(collectionService);
  }


  ngOnDestroy() {

    super.ngOnDestroy();
  }
  public add(item: Item): void {
    console.log(item);
    this.collectionService.add(item);
  }
}
