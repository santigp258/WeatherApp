import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  //restcountries API
  private ApiCountryUrl: string = 'https://restcountries.eu/rest/v2';

  //weatherbit API
  private apiKey: string = 'da118f4ae0f1471189d25bf28098e4ed';
  private ApiWeatherUrl: string = 'https://api.weatherbit.io/v2.0/current';
  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;flag;alpha2Code'); //limit the search
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.ApiCountryUrl}/capital/${term}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError((err) => of([])));
  }

  searchbyCapital(term: string): Observable<Country> {
    const url = `${this.ApiCountryUrl}/capital/${term}`;
    return this.http
      .get<Country>(url, { params: this.httpParams });
  }
}
