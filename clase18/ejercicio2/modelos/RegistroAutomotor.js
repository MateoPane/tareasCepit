"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.getVehiculo = function (index) {
        return this.vehiculos[index] || null;
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (index, vehiculo) {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculo;
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    };
    RegistroAutomotor.prototype.listarVehiculos = function () {
        this.vehiculos.forEach(function (vehiculo, index) {
            console.log("Vehiculo ".concat(index + 1, ": ").concat(vehiculo.getMarca(), " ").concat(vehiculo.getModelo(), " (").concat(vehiculo.getAnio(), ")"));
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
