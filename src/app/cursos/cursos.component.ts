import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    this.nomePortal = 'https://loiane.training/continuar-curso/angular';
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

  ngOnInit() {}
}
