"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numPositivos = 0;
var totalNumeros = 0;
var numUser = -1;
while (numUser != 0) {
    numUser = rls.questionInt("Ingrese un numero: ");
    if (numUser != 0) {
        totalNumeros++;
    }
    if (numUser > 0) {
        numPositivos++;
    }
}
if (totalNumeros > 0) {
    var porcentaje = (numPositivos / totalNumeros) * 100;
    console.log("El porcentaje de n\u00FAmeros positivos ingresados es: ".concat(porcentaje, "%"));
}
else {
    console.log("No se ingresaron números positivos.");
}
