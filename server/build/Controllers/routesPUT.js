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
class ControllerPUT {
    actualizarVehiculo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("UPDATE vehiculo SET ? WHERE Id_vehiculo = ?", [req.body, req.params.id], (value, err) => {
                res.json({ text: value });
            });
        });
    }
    actualizarModelo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("UPDATE modelo SET ? WHERE Id_modelo = ?", [req.body, req.params.id], () => {
                res.json({ text: "modelo actualizado" });
            });
        });
    }
    actualizarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("UPDATE cliente SET ? WHERE Cedula = ?", [req.body, req.params.id], () => {
                res.json({ text: "cliente actualizado" });
            });
        });
    }
}
const controllerPUT = new ControllerPUT();
exports.default = controllerPUT;
