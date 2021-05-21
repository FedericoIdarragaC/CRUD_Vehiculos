import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../services/vehiculos.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:any = [];
  TextAlert:String;

  constructor(private vehiculosService:VehiculosService) {

  }
  
  ngOnInit() {
    this.actualizarClientes();
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
  actualizarClientes()
  {
    this.vehiculosService.listaClientes().subscribe(
      res => {
        console.log(res);
        this.clientes = res;
        
        for(let cliente of this.clientes)
        {
          this.vehiculosService.vehiculosCliente(cliente.Cedula).subscribe
          (
            res => 
            {
              cliente.vehiculos = res;
              console.log(res);
            },
            err => console.log(err)
          )
        }
      },
      err =>
      {
        console.log(err);
      }
    );
  }
  eliminar(Cedula:number)
  {
    this.vehiculosService.eliminarCliente(Cedula).subscribe(
      res=>
      {
        this.Alerta(res['text']);
        this.actualizarClientes()
      },
      err=> console.log(err)
    )
  }
  

}
