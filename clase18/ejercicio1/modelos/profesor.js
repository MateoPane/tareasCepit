"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.alumnos = [];
        this.nombre = nombre;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.quitarAlumno = function (alumno) {
        this.alumnos = this.alumnos.filter(function (a) { return a !== alumno; });
    };
    Profesor.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    return Profesor;
}());
exports.Profesor = Profesor;
