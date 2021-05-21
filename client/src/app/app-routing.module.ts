import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';

import {ListaVehiculosComponent} from '../app/components/lista-vehiculos/lista-vehiculos.component';
import {ListaClientesComponent} from '../app/components/lista-clientes/lista-clientes.component';
import {ListaModelosComponent} from '../app/components/lista-modelos/lista-modelos.component';

import {VehiculoFormComponent} from '../app/components/vehiculo-form/vehiculo-form.component';
import {ModelosFormComponent} from '../app/components/modelos-form/modelos-form.component';
import {ClientesFromComponent} from '../app/components/clientes-from/clientes-from.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/vehiculos',
    pathMatch:'full'
  },
  {
    path:'vehiculos',
    component : ListaVehiculosComponent
  },
  {
    path:'vehiculos/clientes',
    component:ListaClientesComponent
  },
  {
    path:'vehiculos/modelos',
    component:ListaModelosComponent
  },
  {
    path:'vehiculos/añadir',
    component:VehiculoFormComponent
  },
  {
    path:'vehiculos/edit/:id',
    component:VehiculoFormComponent
  },
  {
    path:'vehiculos/modelos/añadir',
    component:ModelosFormComponent
  },
  {
    path: 'vehiculos/modelos/edit/:id',
    component:ModelosFormComponent
  },
  {
    path: 'vehiculos/clientes/añadir',
    component:ClientesFromComponent
  },
  {
    path: 'vehiculos/clientes/edit/:id',
    component:ClientesFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
