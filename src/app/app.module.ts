import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorModule } from './contador/components/contador.module';
import { HeroesListaComponentsModule } from './heroes-lista-components/heroes-lista-components.module';

import { AppComponent } from './app.component';
import { IESPlayamarComponent } from './centroEducativo/iesplayamar/iesplayamar.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent, 
    IESPlayamarComponent 
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesListaComponentsModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
