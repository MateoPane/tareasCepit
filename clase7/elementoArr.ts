function buscarElemento(element: number, arreglo: number[]): number {
  let i: number = 0;
  let contador: number = 0;
  for (i; i < arreglo.length; i++) {
    if (arreglo[i] == element) {
      contador++;
    }
  }
  return contador;
}
let element: number = 1;
let arreglo: number[] = [1, 1, 2, 2, 1, 1, 4, 5];
console.log(buscarElemento(element, arreglo));

function suma(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(suma(1, 4));
