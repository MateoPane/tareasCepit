import * as rls from "readline-sync";

function arrUser(tamano: number): number[] {
  let array: number[] = new Array(tamano);
  for (let i = 0; i < array.length; i++) {
    let numeroUsuario = rls.questionInt("Ingrese un numero: ");
    array[i] = numeroUsuario;
  }
  return array;
}

function bubble(arr: number[]): number[] {
  let longN = arr.length;
  for (let i = 0; i < longN; i++) {
    for (let j = 0; j < longN - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function showArray(array: number[]) {
  console.log(`[${array.join(", ")}]`);
}

let tamano = rls.questionInt("Ingrese el tamaño del arreglo: ");
let arrayUsuario = arrUser(tamano);
showArray(arrayUsuario);
bubble(arrayUsuario);
showArray(arrayUsuario);
