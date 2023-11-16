import { Component } from '@angular/core';

@Component ({
  selector: 'app-contador',
  template: `<h1>{{ title }}</h1>
    <h3>Contador: {{ contador }}</h3>
    <button (click)="decrementaPor(1)">-1</button>
    <button (click)="resetContador()">Reset</button>
    <button (click)="incrementaPor(1)">+1</button>
    <hr>
  `
})

export class ContadorComponent {
  private initContador: number = 10;

  public title: string = 'App Contador';
  public contador: number = this.initContador;

  incrementaPor( valor: number ): void {
    this.contador += valor;
  }

  decrementaPor( valor: number ): void {
    this.contador -= valor;
  }

  resetContador(): void {
    this.contador = this.initContador;
  }

}
