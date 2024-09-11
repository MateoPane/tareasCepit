import * as rls from "readline-sync";

function calcularExponente(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

let num1: number = rls.questionInt("Ingrese la base: ");
let num2: number = rls.questionInt("Ingrese el exponente: ");

while (num1 < 0 || num2 < 0) {
  console.log("Ingrese un numero mayor o igual a 0");
  num1 = rls.questionInt("Ingrese la base: ");
  num2 = rls.questionInt("Ingrese el exponente: ");
}

console.log(
  `El resultado de ${num1} elevado a la potencia de ${num2} es`,
  calcularExponente(num1, num2)
);
