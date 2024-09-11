import * as rls from "readline-sync";

const nombreAlum = rls.question("Ingrese el nombre de su alumno: ");

let nota: number, suma: number, promedio: number, contador: number;
contador = 0;
suma = 0;

for (contador; contador <= 9; contador++) {
  nota = parseFloat(rls.question("Ingrese la nota del alumno: "));
  suma += nota;
}
promedio = suma / contador;
console.log(
  "El promedio de las notas del alumno " + nombreAlum + " es de: " + promedio
);
