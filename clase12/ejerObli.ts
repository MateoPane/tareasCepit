import fs from "node:fs";

const precios: number[] = [525, 3500, 400, 1999];
let preciosGuardados: string = "";
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let productosGuardados: string = "";

for (let i: number = 0; i < precios.length; i++) {
  preciosGuardados += `${precios[i]} `;
}

for (let i: number = 0; i < productos.length; i++) {
  productosGuardados += `${productos[i]} `;
}
fs.writeFileSync("./precios.txt", preciosGuardados);
fs.writeFileSync("./productos.txt", productosGuardados);
fs.readFileSync("./precios.txt", "utf-8");
fs.readFileSync("./productos.txt", "utf-8");
console.log(precios);
console.log(productos);
