import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  uri = 'http://localhost:3000';
  constructor(private http:HttpClient) {

  }

  public listaVehiculos()
  {
    return this.http.get(this.uri+'/vehiculos');
  }

  public obtenerVehiculo(id:number)
  {
    return this.http.get(this.uri+'/vehiculo/'+id);
  }

  public guardarVehiculo(vehiculo:any)
  {
    console.log(vehiculo);
    return this.http.post(this.uri+"/vehiculo",vehiculo);
  }

  public actualizarVehiculo(vehiculo:any,id:number)
  {
    return this.http.put(this.uri+'/vehiculo/'+id,vehiculo);
  }

  public eliminarVehiculo(id:number)
  {
    return this.http.delete(this.uri+'/vehiculo/'+id);
  }

  public listaClientes()
  {
    return this.http.get(this.uri+'/clientes');
  }
  public obtenerCliente(Cedula:number)
  {
    return this.http.get(this.uri+"/cliente/"+Cedula);
  }
  public vehiculosCliente(Cedula:number)
  {
    return this.http.get(this.uri+'/clientesv/'+Cedula);
  }
  public guardarCliente(cliente:any)
  {
    return this.http.post(this.uri+"/cliente",cliente);
  }
  public actualizarCliente(id:number,cliente:any)
  {
    return this.http.put(this.uri+"/cliente/"+id,cliente);
  }
  public eliminarCliente(Cedula:number)
  {
    return this.http.delete(this.uri+"/cliente/"+Cedula);
  }

  public listaModelos()
  {
    return this.http.get(this.uri+"/modelos");
  }

  public obtenerModelo(id:number)
  {
    return this.http.get(this.uri+"/modelo/"+id);
  }
  public guardarModelo(modelo:any)
  {
    return this.http.post(this.uri+"/modelo",modelo);
  }
  public actualizarModelo(id:number,modelo:any)
  {
    return this.http.put(this.uri+"/modelo/"+id,modelo);
  }
  public eliminarModelo(id)
  {
    return this.http.delete(this.uri+"/modelo/"+id);
  }
}
