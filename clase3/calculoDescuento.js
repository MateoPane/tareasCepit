"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioInicial = parseFloat(readlineSync.question("Ingrese el precio del producto: "));
var descuento = 10;
var precio = precioInicial * (1 - descuento / 100);
console.log("El precio con descuento es de: " + precio);
