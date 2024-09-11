import * as readlineSync from "readline-sync";
const alturaPersona: number = readlineSync.questionFloat("Ingrese la altura: ");
console.log("La persona mide: " + alturaPersona + "cm.");
