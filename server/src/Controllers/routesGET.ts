import {request,Request,Response} from 'express';
import pool from '../database';

class ControllerGET
{
    public async listaVehiculos(req:Request,res:Response)
    {
        await pool.query("SELECT * \
        FROM vehiculo inner join cliente on cliente.Cedula = vehiculo.Cedula_v  \
        inner join modelo on modelo.Id_modelo = vehiculo.Id_modelo_v",(err,values)=>
        {
            res.json(values);
        });
        
    }
    public async obtenerVehiculo(req:Request,res:Response)
    {
        await pool.query("SELECT * \
        FROM vehiculo inner join cliente on cliente.Cedula = vehiculo.Cedula_v  \
        inner join modelo on modelo.Id_modelo = vehiculo.Id_modelo_v WHERE Id_vehiculo = ?",req.params.id,(err,values)=>
        {
            res.json(values);
        });
    }
    public async listaModelos(req:Request,res:Response)
    {
        pool.query("SELECT * FROM modelo",(err,values)=>
        {
            res.json(values);
        });
    }
    public async obtenerModelo(req:Request,res:Response)
    {
        pool.query("SELECT * FROM modelo WHERE Id_modelo = ?",req.params.id,(err,values)=>
        {
            res.json(values);
        });
    }
    public async listaClientes(req:Request,res:Response)
    {
        pool.query("SELECT * FROM cliente",(err,values)=>
        {
            res.json(values);
        });
    }
    public async obtenerCliente(req:Request,res:Response)
    {
        pool.query("SELECT * FROM \
        cliente WHERE Cedula = ?",req.params.id,(err,values)=>
        {
            res.json(values);
        });
    }
    public async vehiculosCliente(req:Request,res:Response)
    {
        pool.query("SELECT Id_vehiculo,Nombre_m FROM \
        cliente LEFT JOIN vehiculo ON vehiculo.Cedula_v = Cedula \
        INNER JOIN modelo ON modelo.Id_modelo = Id_modelo_v WHERE Cedula = ?",req.params.id,(err,values)=>
        {
            res.json(values);
        });
    }
    
}

const controllerGET = new ControllerGET();
export default controllerGET;