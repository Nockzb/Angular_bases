import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { IESPlayamarComponent } from './centroEducativo/iesplayamar/iesplayamar.component';
// import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    AppComponent, ContadorComponent, HeroeComponent, IESPlayamarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
