import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../services/vehiculos.service';
import {ActivatedRoute,Router} from '@angular/router';


import * as $ from 'jquery';
@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.css']
})
export class ModelosFormComponent implements OnInit {

  modelo_g:any =
  {
    Id_modelo:0,
    Nombre_m:'',
    Cilindraje:0,
    Torque:0,
    Caballos:0
  }
  
  Edit:boolean = false;

  constructor(private vehiculosServive:VehiculosService,private router:Router,private activeRoute:ActivatedRoute) 
  {

  }

  ngOnInit() 
  {
    const params = this.activeRoute.snapshot.params;
    if(params.id)
    {
      this.vehiculosServive.obtenerModelo(params.id).subscribe(
        res=>{
          console.log(res);
          this.modelo_g = res[0];
          this.Edit = true;
        }
      )
    }
  }
  guardarModelo()
  {
    delete this.modelo_g.Id_modelo;

    this.vehiculosServive.guardarModelo(this.modelo_g).subscribe(
      res=>
      {
        this.router.navigate(['vehiculos/modelos']);
      }
    );
  }
  actualizarModelo()
  {
    this.vehiculosServive.actualizarModelo(this.modelo_g.Id_modelo,this.modelo_g).subscribe(
      res=>
      {
        this.router.navigate(['vehiculos/modelos']);
      }
    );
  }
}
