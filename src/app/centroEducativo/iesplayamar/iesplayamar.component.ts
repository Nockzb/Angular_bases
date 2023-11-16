import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iesplayamar',
  templateUrl: './iesplayamar.component.html',
  styleUrls: ['./iesplayamar.component.css']
})
export class IESPlayamarComponent implements OnInit {
  public centroEducativo:string = "I.E.S. Playamar";
  public localidad:string = "Torremolinos";
  public familiasProfesionales:string[] = ["Informática y Comuniaciones", "Transporte", "Mantenimiento"];
  public logo: string = 'assets/logo-ies-playamar.png';

  public get nombreCentroEd():string {
    return this.centroEducativo;
  }
  public get localidadCentro():string {
    return this.localidad;
  }
  public get familiasProfesionalesCentro():string {
    let familias:string = "";
    this.familiasProfesionales.forEach(element => {
      familias = familias+" - "+element;
    });
    return familias;
  }

  constructor() { }
  ngOnInit(): void { }

  public cambiarCentro(): void {
    if (this.centroEducativo === "I.E.S. Playamar") {
      this.centroEducativo = 'I.E.S. Jacaranda';
      this.localidad = "Churriana";
      this.familiasProfesionales = ["Hostelería y Turismo"];
      this.logo = 'assets/logo-ies-jacaranda.jpeg';
    } else {
      this.centroEducativo = "I.E.S. Playamar";
      this.localidad = "Torremolinos";
      this.familiasProfesionales = ["Informática y Comuniaciones", "Transporte", "Mantenimiento"];
      this.logo = 'assets/logo-ies-playamar.png';
    }
  }
}
