"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombreAlum = rls.question("Ingrese el nombre de su alumno: ");
var nota, suma, promedio, contador;
contador = 0;
suma = 0;
while (contador <= 9) {
    nota = parseFloat(rls.question("Ingrese la nota del alumno: "));
    suma += nota;
    contador++;
}
promedio = suma / contador;
console.log("El promedio de las notas del alumno " + nombreAlum + " es de: " + promedio);
