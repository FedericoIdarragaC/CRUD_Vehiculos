import {request,Request,Response} from 'express';
import pool from '../database';

class ControllerDEL
{
    public async eliminarVehiculo(req:Request,res:Response)
    {
        await pool.query("DELETE FROM vehiculo WHERE Id_vehiculo = ?",req.params.id,()=>
        {
            res.json({text:"Vehiculo eliminado"});
        });
    }
    public async eliminarModelo(req:Request,res:Response)
    {
        await pool.query("DELETE modelo FROM \
        modelo LEFT JOIN vehiculo ON vehiculo.Id_modelo_v = modelo.Id_modelo \
        WHERE Id_vehiculo IS NULL AND Id_modelo = ?",req.params.id,(err,values)=>
        {
            if(values.affectedRows == 0)
            {
                pool.query("SELECT * FROM modelo WHERE Id_modelo = ?",req.params.id,(err,value)=>
                {
                    
                    if(value[0] == null)
                    {
                        res.json({text:"Modelo no encontrado"});
                    }else{
                        res.json({text:"Modelo asignado en un vehiculo"});
                    }
                })
            }else
            {
                res.json({text:"Modelo eliminado"});
            }
        });
    }
    public async eliminarCliente(req:Request,res:Response)
    {
        await pool.query("DELETE cliente FROM cliente LEFT JOIN vehiculo ON vehiculo.Cedula_v = cliente.Cedula \
        WHERE Id_vehiculo IS NULL AND Cedula = ?",req.params.id,(err,values)=>
        {
            if(values.affectedRows == 0)
            {
                pool.query("SELECT * FROM cliente WHERE Cedula = ?",req.params.id,(err,value)=>
                {
                    
                    if(value[0] == null)
                    {
                        res.json({text:"Cliente no encontrado"});
                    }else{
                        res.json({text:"Cliente con vehiculo/s a su nombre"});
                    }
                }) 
            }else
            {
                res.json({text:"Cliente eliminado"});
            }
        });
    }
}

const controllerDel = new ControllerDEL();
export default controllerDel;
