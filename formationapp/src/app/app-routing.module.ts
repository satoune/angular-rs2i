import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/containers/home/home.component';
import { LoginComponent } from './login/contianers/login/login.component';
import { NotFoundComponent } from './page-not-found/containers/not-found/not-found.component';
import { ListComponent } from './items/containers/list/list.component';
import { ListDelivredComponent } from './items/containers/list-delivred/list-delivred.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
       }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
