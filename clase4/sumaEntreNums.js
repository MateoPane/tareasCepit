"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese un numero por pantalla: ");
var num2 = rls.questionInt("Ingrese otro numero por pantalla: ");
var menor;
var mayor;
if (num1 < num2) {
    menor = num1;
    mayor = num2;
}
else {
    menor = num2;
    mayor = num1;
}
var suma = 0;
for (var i = menor; i <= mayor; i++) {
    suma += i;
}
console.log("La suma entre los numeros es de: " + suma);
