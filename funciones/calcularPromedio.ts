import * as rls from "readline-sync";

const nombreAlum = rls.question("Ingrese el nombre de su alumno: ");

let nota: number, suma: number, promedio: number, contador: number;
contador = 0;
suma = 0;

while (contador <= 9) {
  nota = parseFloat(rls.question("Ingrese la nota del alumno: "));
  suma += nota;
  contador++;
}
promedio = suma / contador;
console.log(
  "El promedio de las notas del alumno " + nombreAlum + " es de: " + promedio
);
