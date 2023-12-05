import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor () { }

    public grupoPersonajes: Personaje[] = [
        {
        nombre: "Goku",
        fuerza: 10000
        },
        {
        nombre: "Luna",
        fuerza: 2000
        },
        {
        nombre: "Vegeta",
        fuerza: 4000
        }
    ];

    public onNewPersonaje(pers: Personaje): void {
        this.grupoPersonajes.push(pers)         
    }

    public onDeletePersonaje(index: number): void {
        console.log(this.grupoPersonajes[index]);        
        this.grupoPersonajes.splice(index, 1);
    }
}