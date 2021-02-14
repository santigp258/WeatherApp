import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { CardWheaterComponent } from './components/card-wheater/card-wheater.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { TempComponent } from './pages/temp/temp.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [CardWheaterComponent, HomeComponent, ForecastComponent, TempComponent, SearchComponent],
  imports: [CommonModule, WeatherRoutingModule, MaterialModule],
})
export class WeatherModule {}
