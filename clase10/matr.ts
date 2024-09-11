import * as rls from "readline-sync";

let filas: number = 5;
let col: number = 5;

let matriz: number[][] = new Array(filas);

for (let i = 0; i < filas; i++) {
  matriz[i] = new Array(col);
}

for (let i = 0; i < filas; i++) {
  for (let j = 0; j < col; j++) {
    if (i % 2 === 0) {
      matriz[i][j] = 0;
    } else {
      matriz[i][j] = 1;
    }
  }
}

function imprimirMatriz(matriz: number[][]) {
  for (let i = 0; i < matriz.length; i++) {
    let fila = "";
    for (let j = 0; j < matriz[i].length; j++) {
      fila += matriz[i][j] + " ";
    }
    console.log(fila.trim());
  }
}
imprimirMatriz(matriz);

let fila: number = rls.questionInt("Ingresa un numero de las filas (0-4): ");
let columna: number = rls.questionInt(
  "Ingresa un numero para la columna (0-4): "
);

if (0 <= fila && fila < filas && 0 <= columna && columna < col) {
  matriz[fila][columna] = 5;
} else {
  console.log("No se realiza cambio porque te pasaste de los indices");
}
console.log("Matriz.........");
imprimirMatriz(matriz);
