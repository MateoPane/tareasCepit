"use strict";
/*
Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nums = -1;
var numMinimo = 0;
var contador = 0;
var numMaximo = 0;
while (nums != 0) {
    nums = rls.questionInt("Ingrese un numero: ");
    if (nums >= numMaximo) {
        numMaximo = nums;
    }
    else if (nums <= numMinimo) {
        numMinimo = nums;
    }
}
console.log(numMaximo);
console.log(numMinimo);
