"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombre = rls.question("Ingrese un nombre ");
var apellido = rls.question("Ingrese un apellido ");
function imprimirNombre(nombre, apellido) {
    return "Hola mi nombre es ".concat(nombre, " y mi apellido ").concat(apellido, " utilize ambos strings en una linea de texto");
}
console.log(imprimirNombre(nombre, apellido));
