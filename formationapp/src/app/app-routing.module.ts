import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/containers/home/home.component';
import { LoginComponent } from './login/contianers/login/login.component';
import { NotFoundComponent } from './page-not-found/containers/not-found/not-found.component';
import { ListComponent } from './items/containers/list/list.component';
import { ListDelivredComponent } from './items/containers/list-delivred/list-delivred.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
