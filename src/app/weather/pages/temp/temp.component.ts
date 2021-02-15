import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

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
  term: string = 'santi';
  flag: string = '';
  constructor() {}

  ngOnInit(): void {}

  viewFlag(event: any) {
    console.log('parent', event);
  }
}
