"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var n1 = rls.questionInt("Ingrese un numero entero: ");
var n2 = rls.questionInt("Ingrese un segundo numero entero: ");
var n3 = rls.questionInt("Ingrese el tercer numero entero: ");
if (n1 > n2 && n1 > n3) {
    console.log("El numero mas grande es el: " + n1);
}
else if (n2 > n1 && n2 > n3) {
    console.log("El numero mas grande es el: " + n2);
}
else {
    console.log("El numero mas grande es el: " + n3);
}
