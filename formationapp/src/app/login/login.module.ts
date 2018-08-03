import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './contianers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SHAREDModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SHAREDModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
