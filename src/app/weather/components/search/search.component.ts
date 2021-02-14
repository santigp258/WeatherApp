import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
    .column{
      width: 300px;
    }
    `
  ]
})
export class SearchComponent implements OnInit {
  @Input()term : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
