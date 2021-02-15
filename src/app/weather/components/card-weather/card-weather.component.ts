import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WeatherResponse } from '../../interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit {
  @Input('flag') flag!: string;
  @Input('weather') weather!: WeatherResponse;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather('bogota')
    .subscribe(weather =>{
      this.weather = weather
    })

    this.weatherService.searchCapital('bogota')
    .subscribe((resp) =>{
      this.flag = resp[0].flag;
    });
  }
}
