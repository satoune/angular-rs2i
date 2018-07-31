import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SHAREDModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    PageNotFoundModule,
    SHAREDModule,
    HomeModule,
    ItemsModule,
    NgbModule.forRoot()

  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
