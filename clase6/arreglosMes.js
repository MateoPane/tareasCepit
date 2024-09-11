"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numUser = rls.questionInt("Ingrese el numero del mes que usted quiera saber: ");
var meses = new Array(12);
meses[0] = "Enero";
meses[1] = "Febrero";
meses[2] = "Marzo";
meses[3] = "Abril";
meses[4] = "Mayo";
meses[5] = "Junio";
meses[6] = "Julio";
meses[7] = "Agosto";
meses[8] = "Septiembre";
meses[9] = "Octubre";
meses[10] = "Noviembre";
meses[11] = "Diciembre";
if (numUser < 1 || numUser > 12) {
    console.log("No inserto ningun numero de mes valido");
}
else {
    console.log(meses[numUser - 1]);
}
