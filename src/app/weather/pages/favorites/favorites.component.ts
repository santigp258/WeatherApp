import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { WeatherResponse } from '../../interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [
    `
    .app-card{
      margin-top: 15px;
    }
    `
  ],
})
export class FavoritesComponent implements OnInit {
  favorites: string[] = [];

  //card
  flag: string[] = [];
  weather: WeatherResponse[] = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.favorites = this.weatherService.geFavorites;
    this.showFavorites();
  }

  showFavorites() {
    this.favorites.forEach((element) => {
      this.weatherService
        .searchCapital(element)
        .pipe(
          switchMap((capital) => {
            const valueCapital = capital[0].capital;
            const flag = capital[0].flag;

            //prevent errors
            const valuePrevent = this.weatherService.replaceErr(valueCapital);

            this.flag.push(flag);
            return this.weatherService.getWeather(valuePrevent);
          }),
          map((resp) => {
            resp.flag = this.flag;
            return resp;
          })
        )
        .subscribe((weather) => {
          this.weather.push(weather);
        });
    });
  }

  delete(event: number) {
    //reset values for show again
    this.weatherService.deleteFavorite(event);
    this.weather = [];
    this.flag = [];
    //refresh values
    this.favorites = this.weatherService.geFavorites;
    this.showFavorites();
  }
}
