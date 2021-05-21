import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { ListaModelosComponent } from './components/lista-modelos/lista-modelos.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';

import {VehiculosService} from './services/vehiculos.service';
import { VehiculoFormComponent } from './components/vehiculo-form/vehiculo-form.component';
import { ModelosFormComponent } from './components/modelos-form/modelos-form.component';
import { ClientesFromComponent } from './components/clientes-from/clientes-from.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaVehiculosComponent,
    ListaModelosComponent,
    ListaClientesComponent,
    VehiculoFormComponent,
    ModelosFormComponent,
    ClientesFromComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    VehiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
