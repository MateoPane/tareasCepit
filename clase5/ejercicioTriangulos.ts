function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}
let i: number;
for (i = 1; i <= 10; i++) {
  console.log("El area es = " + calcularAreaTriangulo(i, i * 2));
}
