"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.alumnos = [];
        this.profesores = [];
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.alumnos = this.alumnos.filter(function (a) { return a !== alumno; });
    };
    Escuela.prototype.añadirProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        this.profesores = this.profesores.filter(function (p) { return p !== profesor; });
    };
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.getProfesores = function () {
        return this.profesores;
    };
    return Escuela;
}());
exports.Escuela = Escuela;
