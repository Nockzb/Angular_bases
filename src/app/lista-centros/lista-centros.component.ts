import { Component, OnInit } from '@angular/core';

// Se crea una interfaz para definir los centros educativos
interface CentroEducativo {
  nombre: string;
  localidad: string;
  familiasProfesionales: string[];
  logo: string;
}

@Component({
  selector: 'app-lista-centros',
  templateUrl: './lista-centros.component.html',
  styleUrls: ['./lista-centros.component.css']
})

export class ListaCentrosComponent implements OnInit {
  // Se crea un array de centros educativos
  public mostrarPosicion: boolean = false;
  public arrayCentros: CentroEducativo[] = [
    {
      nombre: "I.E.S. Playamar",
      localidad: "Torremolinos",
      familiasProfesionales: ["Informática y Comunicaciones", "Transporte", "Mantenimiento"],
      logo: 'assets/logo-ies-playamar.png'
    },
    {
      nombre: "I.E.S. Jacaranda",
      localidad: "Churriana",
      familiasProfesionales: ["Hostelería y Turismo"],
      logo: 'assets/logo-ies-jacaranda.jpeg'
    },
    {
      nombre: "I.E.S. Alhambra",
      localidad: "Granada",
      familiasProfesionales: ["Artes Gráficas", "Electricidad", "Administración"],
      logo: 'assets/logo-ies-alhambra.png'
    },
    {
      nombre: "I.E.S. Guadalquivir",
      localidad: "Sevilla",
      familiasProfesionales: ["Química", "Biología", "Salud"],
      logo: 'assets/logo-ies-guadalquivir.png'
    },
    {
      nombre: "I.E.S. Sierra Nevada",
      localidad: "Monachil",
      familiasProfesionales: ["Deportes", "Turismo Rural"],
      logo: 'assets/logo-ies-sierra-nevada.jpeg'
    },
    {
      nombre: "I.E.S. Fuengirola 1",
      localidad: "Fuengirola",
      familiasProfesionales: ["Agricultura", "Ganadería", "Agroindustria"],
      logo: 'assets/logo-ies-fuengirola1.png'
    }
  ];

  // Variables para almacenar la posicion del centro y un array de los centros eliminados
  public indiceCentroActual: number = 0;
  public centrosEliminados: CentroEducativo[] = [];

  public get centroActual(): CentroEducativo {
    return this.arrayCentros[this.indiceCentroActual];
  }

  public get puedeAnterior(): boolean {
    return this.indiceCentroActual > 0;
  }

  public get puedePosterior(): boolean {
    return this.indiceCentroActual < (this.arrayCentros.length - 1);
  }

  constructor() { }

  ngOnInit(): void { }

  public eliminarCentro(): void {
    if (this.arrayCentros.length > 0) {
      const centroEliminado = this.arrayCentros.splice(this.indiceCentroActual, 1)[0];
      this.centrosEliminados.push(centroEliminado);

      if (this.indiceCentroActual >= this.arrayCentros.length) {
        this.indiceCentroActual = this.arrayCentros.length - 1;
      }
    }
  }

  public retroceder(): void {
    if (this.puedeAnterior) {
      this.indiceCentroActual--;
    }
  }

  public getPosicion(): number {
    if (this.mostrarPosicion) {
      this.mostrarPosicion = false;
    } else {
      this.mostrarPosicion = true;
    }
    return this.indiceCentroActual;
  }

  public insertar(): void {
    if (this.centrosEliminados.length > 0) {
      const centroInsertado = this.centrosEliminados.pop(); // Saca el ultimo elemento del array

      if (centroInsertado !== undefined) {
        this.arrayCentros.splice(this.indiceCentroActual, 0, centroInsertado); // Insertar el elemento en la posición actual
      }
    }
  }

  public avanzar(): void {
    if (this.puedePosterior) {
      this.indiceCentroActual++;
    }
  }
}
