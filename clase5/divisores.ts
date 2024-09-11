function esMultiplo(num: number, num2: number): boolean {
  return num % num2 === 0;
}
function cantidadDeDivisores(num: number): number {
  let cantidad = 0;
  for (let i = 1; i <= num; i++) {
    if (esMultiplo(num, i)) {
      cantidad++;
    }
  }
  return cantidad;
}
console.log(cantidadDeDivisores(16)); //imprime 4
