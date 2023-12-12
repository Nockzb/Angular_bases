import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Personaje } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor () { }

    public grupoPersonajes: Personaje[] = [
        {
        id: uuid(),
        nombre: "Goku",
        fuerza: 10000
        },
        {
        id: uuid(),
        nombre: "Luna",
        fuerza: 2000
        },
        {
        id: uuid(),
        nombre: "Vegeta",
        fuerza: 4000
        }
    ];

    public addPersonaje(pers: Personaje): void {
      const newPersonaje: Personaje = { ...pers, id: uuid() } //Añadir el objeto 'pers'
      this.grupoPersonajes.push(newPersonaje)
    }

    // public onDeletePersonaje(index: number): void {
    //     console.log(this.grupoPersonajes[index]);
    //     this.grupoPersonajes.splice(index, 1);
    // }

    public deletePersonajebyId(id: string): void {
      // Se almacena el personaje borrado para mostrarlo por consola
      const personajeBorrado = this.grupoPersonajes.find(personaje => personaje.id === id);

      // Se borra el personaje del array
      this.grupoPersonajes = this.grupoPersonajes.filter(personaje => personaje.id !== id);
      console.log("Personaje borrado:", personajeBorrado);
    }
}
