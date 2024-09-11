import * as rls from "readline-sync";

function arr(tamano: number): number[] {
  let arreglo: number[] = [];
  for (let i = 0; i < tamano; i++) {
    let numero = parseFloat(
      rls.question(`Ingresa el numero para la posicion ${i} `)
    );
    arreglo.push(numero);
  }
  return arreglo;
}
let dimension = 2;

console.log("Carga del primer arreglo: ");
let arreglo1 = arr(dimension);

console.log("Carga del segundo arreglo: ");
let arreglo2 = arr(dimension);

let resultado: number[] = [];
for (let i = 0; i < dimension; i++) {
  resultado[i] = arreglo1[i] + arreglo2[i];
}

console.log("Primer arreglo: ", arreglo1);
console.log("Segundo arreglo: ", arreglo2);
console.log("Resultado de la suma de los dos arreglos: ", resultado);
