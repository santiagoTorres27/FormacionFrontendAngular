import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu = [
    {
      path: '/covid/bar',
      text: 'Barras',
    },
    {
      path: '/covid/doughnut',
      text: 'Dona',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
