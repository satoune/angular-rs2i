import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public state = State;
  public states = Object.values(State);

  faCoffee = faCoffee;


  @Input() item: Item;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  public changeState(state: State): void {
    this.item.state = state;
    this.collectionService.update(this.item);
  }

  public delete(): void {
    this.collectionService.delete(this.item);
  }
}
