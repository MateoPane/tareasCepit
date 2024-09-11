"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num = rls.question("Ingrese un numero: ");
while (num <= 0) {
    console.log("El numero ingresado es 0, por favor pone un numero mayor.");
    num = parseInt(rls.question("Vuelve a ingresar el numero: "));
}
if (num % 2 == 0) {
    console.log(" El numero ingresado " + num + " por pantalla es par");
}
else {
    console.log("El numero ingresado" + num + " por pantalla es impar");
}
