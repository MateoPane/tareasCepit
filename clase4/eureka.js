"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var claveCorrecta = "eureka";
var intentos = 3;
var verdadero = false;
for (var intento = 1; intento <= intentos; intento++) {
    var clave = rls.question("Ingrese la clave: ");
    if (clave === claveCorrecta) {
        console.log("Contraseña correcta");
        verdadero = true;
        break;
    }
    else {
        console.log("Contrase\u00F1a erronea te quedan:  ".concat(intentos - intento));
    }
}
if (!verdadero) {
    console.log("No hay mas intentos");
}
