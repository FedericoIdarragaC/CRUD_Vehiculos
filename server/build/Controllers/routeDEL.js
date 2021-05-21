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
class ControllerDEL {
    eliminarVehiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE FROM vehiculo WHERE Id_vehiculo = ?", req.params.id, () => {
                res.json({ text: "Vehiculo eliminado" });
            });
        });
    }
    eliminarModelo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE modelo FROM \
        modelo LEFT JOIN vehiculo ON vehiculo.Id_modelo_v = modelo.Id_modelo \
        WHERE Id_vehiculo IS NULL AND Id_modelo = ?", req.params.id, (err, values) => {
                if (values.affectedRows == 0) {
                    database_1.default.query("SELECT * FROM modelo WHERE Id_modelo = ?", req.params.id, (err, value) => {
                        if (value[0] == null) {
                            res.json({ text: "Modelo no encontrado" });
                        }
                        else {
                            res.json({ text: "Modelo asignado en un vehiculo" });
                        }
                    });
                }
                else {
                    res.json({ text: "Modelo eliminado" });
                }
            });
        });
    }
    eliminarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE cliente FROM cliente LEFT JOIN vehiculo ON vehiculo.Cedula_v = cliente.Cedula \
        WHERE Id_vehiculo IS NULL AND Cedula = ?", req.params.id, (err, values) => {
                if (values.affectedRows == 0) {
                    database_1.default.query("SELECT * FROM cliente WHERE Cedula = ?", req.params.id, (err, value) => {
                        if (value[0] == null) {
                            res.json({ text: "Cliente no encontrado" });
                        }
                        else {
                            res.json({ text: "Cliente con vehiculo/s a su nombre" });
                        }
                    });
                }
                else {
                    res.json({ text: "Cliente eliminado" });
                }
            });
        });
    }
}
const controllerDel = new ControllerDEL();
exports.default = controllerDel;
