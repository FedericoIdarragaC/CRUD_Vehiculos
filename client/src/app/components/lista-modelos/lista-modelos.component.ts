import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../services/vehiculos.service';

import * as $ from 'jquery';


@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css']
})
export class ListaModelosComponent implements OnInit {

  modelos:any = [];
  TextAlert:String;

  constructor(private vehiculosService:VehiculosService) { }

  ngOnInit() {
    this.actualizarModelos();
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
  Eliminar(Id)
  {
    this.vehiculosService.eliminarModelo(Id).subscribe(
      res =>{
        this.Alerta(res['text']);
        this.actualizarModelos();
      }
    )
  }
  actualizarModelos()
  {
    this.vehiculosService.listaModelos().subscribe(
      res =>
      {
        this.modelos = res;
        
      },
      err=>console.log(err)
    );
  }

}
