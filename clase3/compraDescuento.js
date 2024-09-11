"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rld = require("readline-sync");
var precioCompra = rld.questionFloat("De cuento es el precio de su compra? ");
var cantidad = rld.questionInt("Cuantos compro? ");
var precioFinalSinDescuento = precioCompra * cantidad;
var descuento = 10;
var precioFinalConDesc = precioFinalSinDescuento * (1 - descuento / 100);
if (precioFinalSinDescuento > 1000) {
    console.log("Usted debe pagar: " + precioFinalConDesc);
}
else {
    console.log("Como la compra no supera los 1000 pesos, su monto a pagar sin descuento es de: " + precioFinalSinDescuento);
}
