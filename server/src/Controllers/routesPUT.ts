import {request,Request,Response} from 'express';
import pool from '../database';

class ControllerPUT
{
    public async actualizarVehiculo(req:Request,res:Response)
    {
        await pool.query("UPDATE vehiculo SET ? WHERE Id_vehiculo = ?",[req.body,req.params.id],(value,err)=>{
            res.json({text:value});
        });
    }
    public async actualizarModelo(req:Request,res:Response)
    {
        await pool.query("UPDATE modelo SET ? WHERE Id_modelo = ?",[req.body,req.params.id],()=>{
            res.json({text:"modelo actualizado"});
        });
    }
    public async actualizarCliente(req:Request,res:Response)
    {
        await pool.query("UPDATE cliente SET ? WHERE Cedula = ?",[req.body,req.params.id],()=>{
            res.json({text:"cliente actualizado"});
        });
    }
}
const controllerPUT = new ControllerPUT();
export default controllerPUT;
