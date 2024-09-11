import * as rls from "readline-sync";

let descuento_octubre: number = 15;

let precioUnitario: number = rls.questionInt("Ponga el precio por unidad: ");
let cantidad: number = rls.questionInt("Cuantos llevó?: ");
let mes: string = rls.question("¿En que mes hizo la compra?: ");

let precioSinDec: number = precioUnitario * cantidad;

if (mes == "octubre") {
  let precioFinalOctubre: number =
    precioUnitario * (1 - descuento_octubre / 100);
  let precioTotalOctubre: number = precioFinalOctubre * cantidad;
  console.log(
    "La compra realizada el mes de octubre gracias a nuestro cumpleaños tiene un monton de: " +
      precioFinalOctubre +
      " por unidad ya que aplica el descuento del 15%" +
      " El monto total a pagar es de: " +
      precioTotalOctubre
  );
} else {
  console.log("Su monto total a pagar es de: " + precioSinDec);
}
