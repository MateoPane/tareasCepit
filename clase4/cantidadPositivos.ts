import * as rls from "readline-sync";

let numPositivos = 0;
let totalNumeros = 0;
let numUser = -1;

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
  const porcentaje = (numPositivos / totalNumeros) * 100;
  console.log(
    `El porcentaje de números positivos ingresados es: ${porcentaje}%`
  );
} else {
  console.log("No se ingresaron números positivos.");
}
