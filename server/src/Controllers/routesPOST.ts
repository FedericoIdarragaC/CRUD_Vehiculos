import {request,Request,Response} from 'express';
import pool from '../database';

class ControllerPOST
{
    public async agregarVehiculo(req:Request,res:Response)
    {
        pool.query("INSERT INTO vehiculo SET ?",[req.body],(err,value)=>
        {
            res.json({text:"vehiculo añadido"});
            console.log(err);
        });
    }
    public async agregarModelo(req:Request,res:Response)
    {
        pool.query("INSERT INTO modelo SET ?",[req.body],()=>
        {
            res.json({text:"modelo añadido"});
        });
    }
    public async agregarCliente(req:Request,res:Response)
    {
        pool.query("INSERT INTO cliente SET ?",[req.body],()=>
        {
            res.json({text:"cliente añadido"});
        });
    }

}

const controllerPOST = new ControllerPOST();
export default controllerPOST;