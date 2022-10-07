import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Charles';
  age: number = 32;
  job: string = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'Palio',
    year: 2018,
  };

  constructor() {}

  ngOnInit() {}
}
