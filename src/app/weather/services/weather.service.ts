import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private ApiCountryUrl: string = 'https://restcountries.eu/rest/v2';


  constructor(private http: HttpClient) { }
  
  get httpParams (){
    return new HttpParams()
    .set('fields', 'name;capital;flag') //limitar la busqueda
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.ApiCountryUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(
      catchError((err) => of([]))
    )
  }
}
