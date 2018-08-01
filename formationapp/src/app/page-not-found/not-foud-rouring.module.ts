import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class NotFoudRouringModule { }
