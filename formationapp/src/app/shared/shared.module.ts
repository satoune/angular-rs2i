import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

// Externals libraries
// import { IconsModule } from '../icons/icons.module';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { FilterByStatePipe } from './pipe/filter-by-state.pipe';
import { StateDirective } from './directives/state.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormLoginComponent } from './components/form-login/form-login.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    FormsModule,
    // IconsModule,
    ReactiveFormsModule
  ],

  declarations: [NavComponent,
     ItemComponent,
     CapitalizePipe,
     FilterByStatePipe,
     StateDirective,
     FormComponent,
     FormReactiveComponent,
     FormLoginComponent],

  exports: [NavComponent, ItemComponent, FilterByStatePipe, FormComponent, FormReactiveComponent, FormLoginComponent ]
})
export class SHAREDModule { }
