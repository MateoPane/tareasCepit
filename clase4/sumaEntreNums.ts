import * as rls from "readline-sync";

const num1: number = rls.questionInt("Ingrese un numero por pantalla: ");
const num2: number = rls.questionInt("Ingrese otro numero por pantalla: ");

let menor: number;
let mayor: number;

if (num1 < num2) {
  menor = num1;
  mayor = num2;
} else {
  menor = num2;
  mayor = num1;
}

let suma: number = 0;
for (let i = menor; i <= mayor; i++) {
  suma += i;
}
console.log("La suma entre los numeros es de: " + suma);
