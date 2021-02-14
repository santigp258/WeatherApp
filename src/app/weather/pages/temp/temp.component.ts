import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles: [
    `
      .div-card {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class TempComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
