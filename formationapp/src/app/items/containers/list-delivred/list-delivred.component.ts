import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list-delivred',
  templateUrl: './list-delivred.component.html',
  styleUrls: ['./list-delivred.component.css']
})
export class ListDelivredComponent extends AbstractComponent implements OnInit, OnDestroy {

  // public collection: Item[];
  public state: State;
  constructor(protected collectionService: CollectionService) {
    super(collectionService);
  }

  ngOnInit() {

    console.log('test');
    super.ngOnInit();
    // this.collection = this.collectionService.collection;
  }

}
