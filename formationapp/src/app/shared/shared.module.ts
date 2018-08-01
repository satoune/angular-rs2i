import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { FilterByStatePipe } from './pipe/filter-by-state.pipe';
import { StateDirective } from './directives/state.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule
  ],

  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, StateDirective],
  exports: [NavComponent, ItemComponent, FilterByStatePipe]
})
export class SHAREDModule { }
