"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var descuento_octubre = 15;
var precioUnitario = rls.questionInt("Ponga el precio por unidad: ");
var cantidad = rls.questionInt("Cuantos llevó?: ");
var mes = rls.question("¿En que mes hizo la compra?: ");
var precioSinDec = precioUnitario * cantidad;
if (mes == "octubre") {
    var precioFinalOctubre = precioUnitario * (1 - descuento_octubre / 100);
    var precioTotalOctubre = precioFinalOctubre * cantidad;
    console.log("La compra realizada el mes de octubre gracias a nuestro cumpleaños tiene un monton de: " +
        precioFinalOctubre +
        " por unidad ya que aplica el descuento del 15%" +
        " El monto total a pagar es de: " +
        precioTotalOctubre);
}
else {
    console.log("Su monto total a pagar es de: " + precioSinDec);
}
