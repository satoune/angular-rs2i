import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public state = State;
  @Input() item: Item;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  public changeState(state: State): void {
    this.item.state = state;
    this.collectionService.update(this.item);
  }
}
