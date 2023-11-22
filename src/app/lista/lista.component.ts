import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public nombresHeroes: string[] = ['Goku', 'Piccolo', 'Vegeta', 'Gohan', 'Trunks'];
  public heroeEliminado?: string = "";

  constructor() { }

  ngOnInit(): void { }

  public eliminaUltimoHeroe(): void {
    this.heroeEliminado = this.nombresHeroes.pop();
  }
}
