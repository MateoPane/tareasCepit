import * as rls from "readline-sync";
let cantidad: number;
cantidad = rls.questionInt("Ingrese la cantidad de números:");
let indice: number;
let v: number[] = new Array(cantidad);
for (indice = 0; indice < cantidad; indice++) {
  v[indice] = rls.questionInt(`Ingrese v[, ${indice}, ]`);
}
//Cuento los valores >0, <0 e =0
let numNeg: number = 0;
let numCero: number = 0;
let numPos: number = 0;
// sigue

for (indice = 0; indice < cantidad; indice++) {
  if (v[indice] > 0) {
    numPos++;
  } else if (arreglo[indice] < 0) {
    numNeg++;
  } else {
    numCero++;
  }
}
console.log(numPos, " positivos, ");
console.log(numNeg, " negativos, ");
console.log(numCero, " ceros");
