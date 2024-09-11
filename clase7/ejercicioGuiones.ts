let c: number = 0;

function dibujarGuiones(Par: number): number {
  console.log("Dibujando guiones", Par);
  return Par + 10;
}

let resultado = dibujarGuiones(c);
console.log("Resultado", resultado);

let arreglosNum: number[] = [1, 5, 4, 6, 8, 7, 6];

console.log(`Arreglo de numeros antes de la funcion ${arreglosNum}`);

function cambiaValor(parametro: number[]) {
  parametro[0] = 2;
  parametro.pop();
  console.log(`arreglo de numeros dentro de la funcion: ${arreglosNum}`);
  parametro = [0, 0, 0, 0, 0, 0, 0];
  console.log(`arreglo num dsps de la asignacion ${arreglosNum}`);
}
cambiaValor(arreglosNum);
console.log(`arreglo de numeros dsps de la funcion: ${arreglosNum}`);
