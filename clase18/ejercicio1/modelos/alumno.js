"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.aprobo = function () {
        return this.nota >= 7;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
