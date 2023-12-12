import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {   
    constructor(private dbzService: DbzService) { }    

    get personajes(): Personaje[] {
        return this.dbzService.grupoPersonajes;
    }

    onDeletePersonaje(id:string): void {
        this.dbzService.deletePersonajebyId(id);
    }

    onNewPersonaje(personaje: Personaje): void {
        this.dbzService.addPersonaje(personaje);
    }
}