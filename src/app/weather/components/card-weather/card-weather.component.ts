import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WeatherResponse } from '../../interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css'],
})
export class CardWeatherComponent implements OnInit {
  @Input('flag') flag!: string;
  @Input('weather') weather!: WeatherResponse;
  default: string = 'bogota';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather(this.default).subscribe((weather) => {
      this.weather = weather;
    });

    this.weatherService.searchCapital(this.default).subscribe((resp) => {
      this.flag = resp[0].flag;
    });
  }

  addFavorite(city: string = '') {
    this.weatherService.favorite(city);
  }
}
