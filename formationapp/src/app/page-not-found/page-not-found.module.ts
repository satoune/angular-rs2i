import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { NotFoudRouringModule } from './not-foud-rouring.module';

@NgModule({
  imports: [
    CommonModule,
    NotFoudRouringModule
  ],
  declarations: [NotFoundComponent]
})
export class PageNotFoundModule { }
