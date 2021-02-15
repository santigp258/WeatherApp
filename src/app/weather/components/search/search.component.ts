import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Country } from '../../interfaces/country.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() onFlag: EventEmitter<string> = new EventEmitter(); //term is string type   
  term: string = '';
  countries: Country[] = [];
  countrySelected!: Country | undefined;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  search() {
    if (!this.term) {
      return;
    }
    this.weather
      .searchCapital(this.term.trim())
      .subscribe((countries) => (this.countries = countries));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.countrySelected = undefined;
      return;
    }
    const country: string = event.option.value;
    //console.log(country);
    this.weather.searchbyCapital(country).subscribe((country) => {
      this.countrySelected = country;
      //console.log(this.countrySelected);
    });
  }

  flag() {
    this.onFlag.emit(this.term);
  }
}
