import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { TempComponent } from './pages/temp/temp.component';
import { SearchComponent } from './components/search/search.component';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';
import { ImgPipePipe } from './pipes/img-pipe.pipe';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';


@NgModule({
  declarations: [ HomeComponent, FavoritesComponent, TempComponent, SearchComponent, CardWeatherComponent, ImgPipePipe, ReplacePipe, ConfirmComponent],
  imports: [CommonModule, WeatherRoutingModule, FormsModule, FlexLayoutModule, MaterialModule],
})
export class WeatherModule {}
