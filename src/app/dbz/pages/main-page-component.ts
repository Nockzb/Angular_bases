import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
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
        this.grupoPersonajes.splice(index, 1);
    }
}