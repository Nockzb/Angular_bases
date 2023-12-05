import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page-component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { ListaDbzComponent } from './components/lista-dbz/lista-dbz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent, 
    ListaDbzComponent,
    AddPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})

export class DbzModule { }
