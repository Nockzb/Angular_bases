import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista-dbz.component.html',
  styleUrls: ['./lista-dbz.component.css']
})



export class ListaDbzComponent {  
  @Input()
  public listaPersonajesDbz: Personaje[] = []

  @Output()
  public onDeletePersonaje: EventEmitter<number> = new EventEmitter();

  public deletePersonaje(indice:number): void {
    this.onDeletePersonaje.emit(indice);
  }
}