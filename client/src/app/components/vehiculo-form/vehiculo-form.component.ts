import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../services/vehiculos.service';
import {ActivatedRoute,Router} from '@angular/router';

import {ListaVehiculosComponent} from '../lista-vehiculos/lista-vehiculos.component';

import * as $ from 'jquery';


@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.css']
})
export class VehiculoFormComponent implements OnInit {

  vehiculo_g = {
      Id_vehiculo:0,
      Id_modelo_v:0,
      Precio:0,
      Cedula_v:0
    };
    
  vehiculo:any = {};
  Clientes:any = [];
  Modelos:any = [];

  Cliente:String;
  Modelo:String;

  TextAlert: String;

  Edit:boolean = false;

  constructor(private vehiculosService:VehiculosService,private route:Router,private activeRoute:ActivatedRoute) { 
   
  }

  ngOnInit() {
    $("#alerta").hide();
    $('.close').click(()=>
    {
      $('#alerta').slideUp();
    });
    this.vehiculosService.listaClientes().subscribe(
      res => {
        this.Clientes = res;
        
        this.Cliente = this.Clientes[0].Cedula+' - '+this.Clientes[0].Nombre;
      }
    );
    this.vehiculosService.listaModelos().subscribe(
      res =>{ this.Modelos = res;

      this.Modelo = this.Modelos[0].Id_modelo+' - '+this.Modelos[0].Nombre_m
    }
    );
          
    const params = this.activeRoute.snapshot.params;
    if(params.id)
    {
      this.vehiculosService.obtenerVehiculo(params.id).subscribe(
        res=>
        {
          console.log(res);
          this.Edit = true;
          this.vehiculo = res[0];
          
          this.Modelo = this.vehiculo.Id_modelo+' - '+this.vehiculo.Nombre_m;
          this.Cliente = this.vehiculo.Cedula_v+' - '+this.vehiculo.Nombre;
          
        },
        err=>console.log(err)
      );
    }
    
  }
  
  Alerta(text)
  {
    this.TextAlert = text;
    $("#alerta").slideToggle();
  }
  guardarVehiculo()
  {
    
    let Cli = <HTMLDataElement>document.getElementById("ClienteSel");
    let Mod = <HTMLDataElement>document.getElementById("ModeloSel");

    
  
    this.vehiculo_g = {
      Id_vehiculo:0,
      Id_modelo_v:parseInt(Mod.value.split(" - ")[0]),
      Precio : this.vehiculo.Precio,
      Cedula_v:parseInt(Cli.value.split(" - ")[0])
    }

    delete this.vehiculo_g.Id_vehiculo;

    this.vehiculosService.guardarVehiculo(this.vehiculo_g).subscribe(
      res=>
      {
        this.route.navigate(['/vehiculos']);
      }
    );
  }
  actualizarVehiculo()
  {
    let Cli = <HTMLDataElement>document.getElementById("ClienteSel");
    let Mod = <HTMLDataElement>document.getElementById("ModeloSel");

    this.vehiculo_g = {
      Id_vehiculo:this.vehiculo.Id_vehiculo,
      Id_modelo_v:parseInt(Mod.value.split(" - ")[0]),
      Precio : this.vehiculo.Precio,
      Cedula_v:parseInt(Cli.value.split(" - ")[0])
    }
    console.log(this.vehiculo.Id_vehiculo);
    this.vehiculosService.actualizarVehiculo(this.vehiculo_g,this.vehiculo.Id_vehiculo).subscribe(
      res=>
      {
        this.route.navigate(['/vehiculos']);
      }
    );
  }
}
