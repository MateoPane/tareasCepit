import * as rls from "readline-sync";

let arrLetras: string[] = ["a", "e", "i", "o", "u"];
console.log(arrLetras);

let arrNombres: string[] = ["Mateo", "Luis", "Facundo", "Fernando", "Lucila"];

let user: string = rls.question("Ingrese un nombre: ");

let nombreUser = user;

if (arrNombres.includes(nombreUser)) {
  console.log(`El nombre '${nombreUser}' está en el arreglo.`);
} else {
  console.log(`El nombre '${nombreUser}' NO está en el arreglo.`);
}
