import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../services/vehiculos.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

  vehiculos:any = [];

  TextAlert:String;

  constructor(private vehiculosService:VehiculosService) { }

  ngOnInit() {
    this.ActualizarLista();
    $("#alerta").hide();
    $('.close').click(()=>
    {
      $('#alerta').slideUp();
    });
  }
  Alerta(text)
  {
    this.TextAlert = text;
    $("#alerta").slideToggle();
  }
  ActualizarLista()
  {
    this.vehiculosService.listaVehiculos().subscribe(
      res => {
        console.log(res);
        this.vehiculos = res;
      },
      err=>console.log(err)  
    );
  }
  Eliminar(id:number)
  {
    this.vehiculosService.eliminarVehiculo(id).subscribe(
      res => {
        console.log(res);
        this.ActualizarLista();
        this.Alerta(res['text']);
      },
      err=>console.log(err) 
    );
  }
}
