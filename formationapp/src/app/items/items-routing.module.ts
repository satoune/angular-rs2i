import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containers/list/list.component';
import { ListDelivredComponent } from './containers/list-delivred/list-delivred.component';

const appRoutes: Routes = [
   { path: 'list',      component: ListComponent },
   { path: 'livrees',      component: ListDelivredComponent }
 ];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ItemsRoutingModule { }
