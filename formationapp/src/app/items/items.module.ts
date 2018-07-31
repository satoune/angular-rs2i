import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListComponent } from './containers/list/list.component';

import { SHAREDModule } from '../shared/shared.module';
import { ListDelivredComponent } from './containers/list-delivred/list-delivred.component';
import { AbstractComponent } from './containers/abstract/abstract.component';

@NgModule({
  imports: [
    CommonModule,
    SHAREDModule
  ],
  declarations: [ListComponent, ListDelivredComponent, AbstractComponent],
  exports: [ListComponent, ListDelivredComponent]
})
export class ItemsModule { }
