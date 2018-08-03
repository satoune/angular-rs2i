import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { Router } from '@angular/router';
import { DateService } from '../../../core/services/date.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public newItem: Item;
  public states = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();

  constructor(private router: Router, private dateService: DateService) {}

  ngOnInit() {
    this.init();
    console.log(this.states);
  }

  private init(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER,
      delivryDate: ''
    };
  }

  public process(): void {
    console.log(this.newItem);
    this.newItem.delivryDate = this.dateService.dateToIso(this.newItem.delivryDate);
    this.nItem.emit(this.newItem);
    this.init();
  }
}
