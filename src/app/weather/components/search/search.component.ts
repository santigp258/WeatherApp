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
  @Output() onSelect: EventEmitter<string> = new EventEmitter(); //term is string type   
  @Output() onTerm: EventEmitter<string> = new EventEmitter(); //term is string type   
  term: string = '';
  @Input() countries: Country[] = [];
  countrySelected!: Country | undefined;

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}


  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value || event.option.value == "") {
      this.countrySelected = undefined;
      return;
    }
    const alphaCode: string = event.option.value;
    this.term = '';
    this.onSelect.emit(alphaCode)
  }

  search() {
    if (!this.term) {
      return;
    }
    this.onTerm.emit(this.term);
  }

}
