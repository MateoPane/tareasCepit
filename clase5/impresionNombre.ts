import * as rls from "readline-sync";

let nombre: string = rls.question("Ingrese un nombre ");
let apellido: string = rls.question("Ingrese un apellido ");

function imprimirNombre(nombre, apellido): string {
  return `Hola mi nombre es ${nombre} y mi apellido ${apellido} utilize ambos strings en una linea de texto`;
}
console.log(imprimirNombre(nombre, apellido));
