"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese un numero: ");
var par = numero % 2;
if (numero === 0) {
    console.log("El numero es 0");
}
else if (par == 0) {
    console.log("El numero " + numero + " es par");
}
else {
    console.log("El numero " + numero + " es impar");
}
;
