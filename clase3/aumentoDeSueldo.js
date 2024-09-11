"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var salarioEmpl = rls.questionFloat("Ingrese su salario actual por favor: ");
var aumento20 = 0.2;
var aumento10 = 0.1;
var aumento5 = 0.05;
if (salarioEmpl <= 15000) {
    var nuevoAumento = salarioEmpl * aumento20;
    var nuevoSaldo = salarioEmpl + nuevoAumento;
    console.log("Tu aumento salarial es de un 20%, tu saldo ahora es de: " + nuevoSaldo);
}
else if (salarioEmpl <= 20000) {
    var nuevoAumento = salarioEmpl * aumento10;
    var nuevoSaldo = salarioEmpl + nuevoAumento;
    console.log("Tu aumento salarial es de un 10%, tu saldo ahora es de: " + nuevoSaldo);
}
else if (salarioEmpl <= 25000) {
    var nuevoAumento = salarioEmpl * aumento5;
    var nuevoSaldo = salarioEmpl + nuevoAumento;
    console.log("Tu aumento salarial es de un 5%, tu saldo ahora es de: " + nuevoSaldo);
}
else {
    console.log("Tu salario es de: " + salarioEmpl);
}
