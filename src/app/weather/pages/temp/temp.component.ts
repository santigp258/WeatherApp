import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { WeatherService } from '../../services/weather.service';
import { Weather, WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: [
    `
      .div-search {
        display: flex;
        justify-content: center;
      }

      .div-card {
        margin: 0 auto;
      }
    `,
  ],
})
export class TempComponent implements OnInit {
  //from child
  term: string = '';
  flag: string = '';
  weather!: WeatherResponse;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  viewFlag(value: string) {
    this.flag = value;
  }

  onTerm(term:string){
    this.term = term;
    this.weatherService.getWeather(this.term)
    .subscribe(weather =>{
      this.weather = weather;
    });
  }

}
