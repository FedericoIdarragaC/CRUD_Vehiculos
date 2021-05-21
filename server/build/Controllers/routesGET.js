"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ControllerGET {
    listaVehiculos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * \
        FROM vehiculo inner join cliente on cliente.Cedula = vehiculo.Cedula_v  \
        inner join modelo on modelo.Id_modelo = vehiculo.Id_modelo_v", (err, values) => {
                res.json(values);
            });
        });
    }
    obtenerVehiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * \
        FROM vehiculo inner join cliente on cliente.Cedula = vehiculo.Cedula_v  \
        inner join modelo on modelo.Id_modelo = vehiculo.Id_modelo_v WHERE Id_vehiculo = ?", req.params.id, (err, values) => {
                res.json(values);
            });
        });
    }
    listaModelos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("SELECT * FROM modelo", (err, values) => {
                res.json(values);
            });
        });
    }
    obtenerModelo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("SELECT * FROM modelo WHERE Id_modelo = ?", req.params.id, (err, values) => {
                res.json(values);
            });
        });
    }
    listaClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("SELECT * FROM cliente", (err, values) => {
                res.json(values);
            });
        });
    }
    obtenerCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("SELECT * FROM \
        cliente WHERE Cedula = ?", req.params.id, (err, values) => {
                res.json(values);
            });
        });
    }
    vehiculosCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query("SELECT Id_vehiculo,Nombre_m FROM \
        cliente LEFT JOIN vehiculo ON vehiculo.Cedula_v = Cedula \
        INNER JOIN modelo ON modelo.Id_modelo = Id_modelo_v WHERE Cedula = ?", req.params.id, (err, values) => {
                res.json(values);
            });
        });
    }
}
const controllerGET = new ControllerGET();
exports.default = controllerGET;
