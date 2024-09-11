import * as rls from "readline-sync";

let precioCompra : number = rls.questionFloat("De cuento es el precio de su compra? ");

let cantidad : number =  rls.questionInt("Cuantos compro? ");

let precioFinalSinDescuento : number = precioCompra * cantidad;

let descuento : number = 10;

let precioFinalConDesc : number = precioFinalSinDescuento * (1- descuento/100);

if (precioFinalSinDescuento > 1000) {
    console.log("Usted debe pagar: " + precioFinalConDesc);
} else {
    console.log("Como la compra no supera los 1000 pesos, su monto a pagar sin descuento es de: " + precioFinalSinDescuento);
    
}