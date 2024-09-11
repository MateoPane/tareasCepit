let edades: number[] = [];

function aleatorio(
  cantidad: number,
  menorValor: number,
  mayorValor: number
): number[] {
  for (let i = 0; i < cantidad; i++) {
    let edad =
      Math.floor(Math.random() * (mayorValor - menorValor + 1)) + menorValor;
    edades.push(edad);
  }
  return edades;
}
function calcularProm(edades: number[]): number {
  if (edades.length === 0) {
    return 0;
  } else {
    let suma = edades.reduce((acc, curr) => acc + curr, 0);
    return suma / edades.length;
  }
}
edades = aleatorio(8, 3, 7);
console.log(`Edades generadas: ${edades}`);
let promedio = calcularProm(edades);
console.log(`El promedio de la edad de los compañeros es: ${promedio}`);
