"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./modelos/Alumno");
var Profesor_1 = require("./modelos/Profesor");
var Escuela_1 = require("./modelos/Escuela");
function main() {
    var alumno = new Alumno_1.Alumno("Pedro", 5);
    var alumno2 = new Alumno_1.Alumno("Mateo", 2);
    var alumno3 = new Alumno_1.Alumno("Ana", 10);
    var profesor = new Profesor_1.Profesor("Franco");
    var escuela = new Escuela_1.Escuela();
    escuela.añadirProfesor(profesor);
    escuela.matricularAlumno(alumno);
    escuela.matricularAlumno(alumno2);
    escuela.matricularAlumno(alumno3);
    profesor.agregarAlumno(alumno);
    profesor.agregarAlumno(alumno3);
    profesor.agregarAlumno(alumno2);
    console.log("Alumnos de ".concat(profesor.getNombre(), ":"));
    profesor.getAlumnos().forEach(function (alumno) {
        console.log("- ".concat(alumno.getNombre(), " (").concat(alumno.aprobo() ? "Aprobado" : "Desaprobado", ")"));
    });
    escuela.expulsarAlumno(alumno2);
    console.log("Alumnos matriculados dsps de expulsar:");
    escuela.getAlumnos().forEach(function (alumno) {
        console.log("- ".concat(alumno.getNombre()));
    });
}
main();
