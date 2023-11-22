import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorModule } from './contador/components/contador.module';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { IESPlayamarComponent } from './centroEducativo/iesplayamar/iesplayamar.component';
import { ListaComponent } from './lista/lista.component';
import { ListaCentrosComponent } from './lista-centros/lista-centros.component';

@NgModule({
  declarations: [
    AppComponent, HeroeComponent, IESPlayamarComponent, ListaComponent, ListaCentrosComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
