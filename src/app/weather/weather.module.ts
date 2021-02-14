import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { TempComponent } from './pages/temp/temp.component';
import { SearchComponent } from './components/search/search.component';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';


@NgModule({
  declarations: [ HomeComponent, ForecastComponent, TempComponent, SearchComponent, CardWeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, FormsModule, FlexLayoutModule, MaterialModule],
})
export class WeatherModule {}
