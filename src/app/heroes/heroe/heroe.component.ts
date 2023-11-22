import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public nombre:string = "Gokuu";
  public edad:number = 34;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public get descripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  constructor() { }

  ngOnInit(): void {}

  public cambiarNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  public cambiarEdad(nuevaEdad: number): void {
    this.edad = nuevaEdad;
  }

  public restablecerValores(): void {
    this.edad = 34;
    this.nombre = 'Gokuu';
  }
}
