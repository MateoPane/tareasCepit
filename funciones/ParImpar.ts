import * as rls from "readline-sync";

let numero: number = rls.questionInt("Ingrese un numero: ");

let par: number = numero % 2;
if (numero === 0) {
  console.log("El numero es 0");
} else if (par == 0) {
  console.log("El numero " + numero + " es par");
} else {
  console.log("El numero " + numero + "es impar");
}
