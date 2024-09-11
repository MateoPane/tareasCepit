"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function calcularExponente(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  var resultado = 1;
  for (var i = 0; i < exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}
var num1 = rls.questionInt("Ingrese la base: ");
var num2 = rls.questionInt("Ingrese el exponente: ");
while (num1 < 0 || num2 < 0) {
  console.log("Ingrese un numero mayor o igual a 0");
  num1 = rls.questionInt("Ingrese la base: ");
  num2 = rls.questionInt("Ingrese el exponente: ");
}
console.log(
  "El resultado de "
    .concat(num1, " elevado a la potencia de ")
    .concat(num2, " es"),
  calcularExponente(num1, num2)
);
