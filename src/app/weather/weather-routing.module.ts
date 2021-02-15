import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './pages/favorites/favorites.component';

import { HomeComponent } from './pages/home/home.component';
import { TempComponent } from './pages/temp/temp.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'temp',
        component: TempComponent
      },
      {
        path: '**',
        redirectTo: 'temp'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
