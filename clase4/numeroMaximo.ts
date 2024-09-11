/*
Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
*/

import * as rls from "readline-sync";

let nums = -1;
let numMinimo: number = 0;
let numMaximo = 0;

while (nums != 0) {
  nums = rls.questionInt("Ingrese un numero: ");
  if (nums >= numMaximo) {
    numMaximo = nums;
  } else if (nums <= numMinimo) {
    numMinimo = nums;
  }
}
console.log(numMaximo);
console.log(numMinimo);
