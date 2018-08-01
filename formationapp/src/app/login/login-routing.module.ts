import { NgModule } from '@angular/core';
import { LoginComponent } from './contianers/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  { path: 'login',      component: LoginComponent }

];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class LoginRoutingModule { }
