import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router) {}

  pagNgif() {
    console.log('Acesso minha rota ngIf');
    this.router.navigate(['/ngif']);
  }
  pagNgfor() {
    console.log('Acessando minha rota ngfor');
    this.router.navigate(['/ngfor']);
  }
  pagNgifContac() {
    this.router.navigate(['/ngifcontatos']);
  }
}
