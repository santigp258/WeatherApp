import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

import { catchError } from 'rxjs/operators';
import { WeatherResponse } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  //restcountries API
  private ApiCountryUrl: string = 'https://restcountries.eu/rest/v2';

  //weatherbit API
  private apiKey: string = 'da118f4ae0f1471189d25bf28098e4ed';
  private ApiWeatherUrl: string = 'https://api.weatherbit.io/v2.0/current';

  //localStorage
  private _favorites: string[] = [];

  get geFavorites() {
    return [...this._favorites];
  }

  constructor(private http: HttpClient) {
    this._favorites = JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  get getCountryParams() {
    return new HttpParams().set('fields', 'name;capital;flag;alpha2Code'); //limit the search
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.ApiCountryUrl}/capital/${term}`;
    return this.http
      .get<Country[]>(url, { params: this.getCountryParams })
      .pipe(catchError((err) => of([])));
  }

  searchbyCapital(term: string): Observable<Country> {
    const url = `${this.ApiCountryUrl}/capital/${term}`;
    return this.http.get<Country>(url, { params: this.getCountryParams });
  }

  getWeather(capital: string): Observable<WeatherResponse> {
    const params = new HttpParams()
      .set('city', capital)
      .set('key', this.apiKey);
    return this.http.get<WeatherResponse>(`${this.ApiWeatherUrl}`, { params });
  }

  favorite(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._favorites.includes(query)) {
      this._favorites.unshift(query); //insert al inicio
      localStorage.setItem('favorites', JSON.stringify(this._favorites));
    }
  }

  replaceErr(value: string): string {
    //prevent special characters
    const match = value.indexOf("'");
    const match2 = value.indexOf(',');
    if (match > -1) {
      value = value.slice(0, match);
    } else if (match2 > -1) {
      value = value.slice(0, match2);
    }

    return value;
  }

  deleteFavorite(index: number){
    let local = JSON.parse(localStorage.getItem('favorites') || '');
    local.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(local));    
  }
}
