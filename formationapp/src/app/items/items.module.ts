import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemsRoutingModule } from './items-routing.module';

import { ListComponent } from './containers/list/list.component';



import { SHAREDModule } from '../shared/shared.module';
import { ListDelivredComponent } from './containers/list-delivred/list-delivred.component';
import { AbstractComponent } from './containers/abstract/abstract.component';
import { AddComponent } from './containers/add/add.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    SHAREDModule,
    ItemsRoutingModule
  ],
  declarations: [ListComponent, ListDelivredComponent, AbstractComponent, AddComponent, AddReactiveComponent],
  exports: [ListComponent, ListDelivredComponent]
})
export class ItemsModule { }
