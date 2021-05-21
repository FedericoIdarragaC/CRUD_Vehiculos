import express from 'express';
import { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import controllerGET from './Controllers/routesGET';
import controllerPOST from './Controllers/routesPOST';
import controllerPUT from './Controllers/routesPUT';
import controllerDel from './Controllers/routeDEL';

class Server
{
    public app:Application;

    constructor()
    {
        this.app=express();
        this.config();
        this.routes();
    }
    config():void
    {
        this.app.set('port',process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
     routes():void
    {
        //Rutas GET
        this.app.get("/vehiculos",controllerGET.listaVehiculos);
        this.app.get("/vehiculo/:id",controllerGET.obtenerVehiculo);
        this.app.get("/modelos",controllerGET.listaModelos);
        this.app.get("/modelo/:id",controllerGET.obtenerModelo);
        this.app.get("/clientes",controllerGET.listaClientes);
        this.app.get("/cliente/:id",controllerGET.obtenerCliente);
        this.app.get("/clientesv/:id",controllerGET.vehiculosCliente);

        //Rutas POST
        this.app.post("/vehiculo",controllerPOST.agregarVehiculo);
        this.app.post("/modelo",controllerPOST.agregarModelo);
        this.app.post("/cliente",controllerPOST.agregarCliente);
        
        //Rutas PUT
        this.app.put("/vehiculo/:id",controllerPUT.actualizarVehiculo);
        this.app.put("/modelo/:id",controllerPUT.actualizarModelo);
        this.app.put("/cliente/:id",controllerPUT.actualizarCliente);
        
        //Rutas DELETE
        this.app.delete("/vehiculo/:id",controllerDel.eliminarVehiculo);
        this.app.delete("/modelo/:id",controllerDel.eliminarModelo);
        this.app.delete("/cliente/:id",controllerDel.eliminarCliente);
    }
     start():void
    {
        this.app.listen(this.app.get('port'),()=>
        {
            console.log("Server on port: ",this.app.get('port'));
        })
    }
}
let server = new Server();
server.start();