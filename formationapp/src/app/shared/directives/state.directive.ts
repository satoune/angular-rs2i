import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nomClass: String;
  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
    console.log(this.formatClass);
  }

  private formatClass(state: State): String {
    console.log('state-' + state.normalize('NFD').replace(' ', '').replace(/[\u0300-\u036f]/g, '').toLowerCase());
    return 'state-' + state.normalize('NFD').replace(' ', '').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
}
