"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var primerNum = rls.question("Ingrese un numero: ");
var ultNum = rls.question("Ingrese hasta que numero quiere que se multiplique.");
for (var i = 1; i <= ultNum; i++) {
    console.log("El ".concat(primerNum, " multiplicado por ").concat(i, " es: ").concat(primerNum * i));
}
