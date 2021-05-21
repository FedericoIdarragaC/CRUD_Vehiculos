"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routesGET_1 = __importDefault(require("./Controllers/routesGET"));
const routesPOST_1 = __importDefault(require("./Controllers/routesPOST"));
const routesPUT_1 = __importDefault(require("./Controllers/routesPUT"));
const routeDEL_1 = __importDefault(require("./Controllers/routeDEL"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        //Rutas GET
        this.app.get("/vehiculos", routesGET_1.default.listaVehiculos);
        this.app.get("/vehiculo/:id", routesGET_1.default.obtenerVehiculo);
        this.app.get("/modelos", routesGET_1.default.listaModelos);
        this.app.get("/modelo/:id", routesGET_1.default.obtenerModelo);
        this.app.get("/clientes", routesGET_1.default.listaClientes);
        this.app.get("/cliente/:id", routesGET_1.default.obtenerCliente);
        this.app.get("/clientesv/:id", routesGET_1.default.vehiculosCliente);
        //Rutas POST
        this.app.post("/vehiculo", routesPOST_1.default.agregarVehiculo);
        this.app.post("/modelo", routesPOST_1.default.agregarModelo);
        this.app.post("/cliente", routesPOST_1.default.agregarCliente);
        //Rutas PUT
        this.app.put("/vehiculo/:id", routesPUT_1.default.actualizarVehiculo);
        this.app.put("/modelo/:id", routesPUT_1.default.actualizarModelo);
        this.app.put("/cliente/:id", routesPUT_1.default.actualizarCliente);
        //Rutas DELETE
        this.app.delete("/vehiculo/:id", routeDEL_1.default.eliminarVehiculo);
        this.app.delete("/modelo/:id", routeDEL_1.default.eliminarModelo);
        this.app.delete("/cliente/:id", routeDEL_1.default.eliminarCliente);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port: ", this.app.get('port'));
        });
    }
}
let server = new Server();
server.start();
