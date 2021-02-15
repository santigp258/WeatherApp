import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit, OnChanges {
  @Input('flag') flag: string = '';
  @Input('weather') weather!: WeatherResponse;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    if(!this.weather){
      return;
    }
    console.log(this.weather.data[0]);
  }
}
