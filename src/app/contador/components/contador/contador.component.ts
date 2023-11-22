import { Component } from '@angular/core';

@Component ({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
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
