import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { WeatherResponse } from '../../interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [],
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
            
            this.flag.unshift(flag);
            return this.weatherService.getWeather(valuePrevent);
          }),
          map((resp) => {
            resp.flag = this.flag;
            return resp;
          })
        )
        .subscribe((weather) => {
          this.weather.unshift(weather);
        });
    });
  }
}
