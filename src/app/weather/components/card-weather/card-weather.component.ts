import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  //delete favorite
  @Input('index') indexFavorite: number = 0;
  @Output() onDelete: EventEmitter<number> = new EventEmitter(); //term is string type

  buttonVisibility: boolean = true;
  default: string = 'bogota';

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private snakBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //no execute in favorites
    if (!this.router.url.includes('favorites')) {
      this.weatherService.getWeather(this.default).subscribe((weather) => {
        this.weather = weather;
      });

      this.weatherService.searchCapital(this.default).subscribe((resp) => {
        this.flag = resp[0].flag;
      });
    } else {
      //diference in favorite button and delete favorite
      this.buttonVisibility = false;
    }
  }

  addFavorite(city: string = '') {
    const favorite = this.weatherService.favorite(city);
    (!favorite) ? this.showSnakbar("This city has already been added as a favorite") :
    this.showSnakbar('City successfully added');
    
  }

  delete(index: number) {
    this.onDelete.emit(index);
  }

  //notification
  showSnakbar(message: string): void {
    this.snakBar.open(message, 'Ok!', {
      duration: 2500,
    });
  }
}
