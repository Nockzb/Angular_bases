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

    public onNewPersonaje(pers: Personaje): void {
      const newPersonaje: Personaje = { id: uuid(), ...pers } //Añadir el objeto 'pers' luego del id
      this.grupoPersonajes.push(newPersonaje)
    }

    public onDeletePersonaje(index: number): void {
        console.log(this.grupoPersonajes[index]);
        this.grupoPersonajes.splice(index, 1);
    }
}
