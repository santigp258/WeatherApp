import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { WeatherService } from '../../services/weather.service';
import { WeatherResponse } from '../../interfaces/weather.interface';
import { switchMap } from 'rxjs/operators';

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

  //tosearch
  countries: Country[] = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  selected(value: string) {
    this.weatherService
      .searchCapital(value)
      .pipe(
        switchMap((country) => {
          //delete special characters
          let capital = country[0].capital.trim();
          const match = capital.indexOf(',') || capital.indexOf("'");
          if (match > -1) {
            capital = capital.slice(0, match);
          }
          this.flag = country[0].flag;
          return this.weatherService.getWeather(capital);
        })
      )
      .subscribe((weather) => {
        this.weather = weather;
      });
  }

  onTerm(term: string) {
    this.weatherService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
