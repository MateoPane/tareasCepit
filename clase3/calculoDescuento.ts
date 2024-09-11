import * as readlineSync from "readline-sync";

const precioInicial : number = parseFloat(readlineSync.question("Ingrese el precio del producto: "));
const descuento : number = 10;
const precio : number = precioInicial * (1 - descuento/100);

console.log("El precio con descuento es de: " + precio);
