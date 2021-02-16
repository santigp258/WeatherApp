import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, switchMap } from 'rxjs/operators';

import { WeatherResponse } from '../../interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [
    `
      .app-card {
        margin-top: 15px;
      }

      .add {
        width: 50%;
        margin: 0 auto;
      }

      .add img {
        margin-top: 50px;
        width: 100%;
      }

      @media (max-width: 400px) {
        .add {
          width: 80%;
        }

        .add img {
          width: 100%;
        }
      }
    `,
  ],
})
export class FavoritesComponent implements OnInit {
  favorites: string[] = [];

  //card
  flag: string[] = [];
  weather: WeatherResponse[] = [];
  constructor(
    private weatherService: WeatherService,
    private dialog: MatDialog,
    private snakBar: MatSnackBar
  ) {}

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

  delete(event: number, nameCapital: any) {
    //recipe nameCapital for to send confirm component
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: nameCapital,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        //reset values for show again
        this.weatherService.deleteFavorite(event);
        this.weather = [];
        this.flag = [];
        //refresh values
        this.favorites = this.weatherService.geFavorites;
        this.showFavorites();

        this.showSnakbar('City has been removed');
      }
    });
  }

  showSnakbar(message: string): void {
    this.snakBar.open(message, 'Ok!', {
      duration: 2500,
    });
  }
}
