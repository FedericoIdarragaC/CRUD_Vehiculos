import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../services/vehiculos.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-clientes-from',
  templateUrl: './clientes-from.component.html',
  styleUrls: ['./clientes-from.component.css']
})
export class ClientesFromComponent implements OnInit {

  cliente:any = 
  {
    Cedula:0,
    Fecha_nac:'',
    Nombre:''
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
      this.vehiculosServive.obtenerCliente(params.id).subscribe(
        res=>{
          this.cliente = res[0];
          this.cliente.Fecha_nac = this.cliente.Fecha_nac.toString().slice(0,10).replace('T', ' ');
          
          this.Edit = true;
        }
      );
    }
  }
  guardarCliente()
  {
    this.vehiculosServive.guardarCliente(this.cliente).subscribe(
      res=>
      {
        this.router.navigate(['vehiculos/clientes']);
      }
    );
  }
  actualizarCliente()
  {
    this.vehiculosServive.actualizarCliente(this.cliente.Cedula,this.cliente).subscribe(
      res=>{
        this.router.navigate(['vehiculos/clientes']);
      }
    );
  }
}
