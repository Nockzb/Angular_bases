import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {
  // Se crea la propiedad de tipo evento para emitir valores
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    nombre: '',
    fuerza: null,
    id: ''
  }

  public addPersonaje(): void {
    this.onNewPersonaje.emit(this.personaje)

    this.personaje = {nombre: '', fuerza: null, id: ''}
  }
}
