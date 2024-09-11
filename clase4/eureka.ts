// • Escribir un algoritmo que nos pida
// una clave y verifique que sea la
// correcta
// • Tenga en cuenta que la clave es
// la palabra “eureka”
// • Solo tenemos 3 intentos para
// acertar, si fallamos los 3 intentos
// el sistema mostrará un mensaje
// indicándonos que hemos agotado
// todas las oportunidades
// • Si acertamos la clave, saldremos
// directamente del programa

import * as rls from "readline-sync";

let claveCorrecta: string = "eureka";
const intentos: number = 3;
let verdadero: boolean = false;

for (let intento = 1; intento <= intentos; intento++) {
  const clave = rls.question("Ingrese la clave: ");
  if (clave === claveCorrecta) {
    console.log("Contraseña correcta");
    verdadero = true;
    break;
  } else {
    console.log(`Contraseña erronea te quedan:  ${intentos - intento}`);
  }
}
if (!verdadero) {
  console.log("No hay mas intentos");
}
