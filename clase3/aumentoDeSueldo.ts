import * as rls from "readline-sync";

let salarioEmpl: number = rls.questionFloat(
  "Ingrese su salario actual por favor: "
);

let aumento20: number = 0.2;

let aumento10: number = 0.1;

let aumento5: number = 0.05;
if (salarioEmpl <= 15000) {
  let nuevoAumento: number = salarioEmpl * aumento20;
  let nuevoSaldo: number = salarioEmpl + nuevoAumento;
  console.log(
    "Tu aumento salarial es de un 20%, tu saldo ahora es de: " + nuevoSaldo
  );
} else if (salarioEmpl <= 20000) {
  let nuevoAumento: number = salarioEmpl * aumento10;
  let nuevoSaldo: number = salarioEmpl + nuevoAumento;
  console.log(
    "Tu aumento salarial es de un 10%, tu saldo ahora es de: " + nuevoSaldo
  );
} else if (salarioEmpl <= 25000) {
  let nuevoAumento: number = salarioEmpl * aumento5;
  let nuevoSaldo: number = salarioEmpl + nuevoAumento;
  console.log(
    "Tu aumento salarial es de un 5%, tu saldo ahora es de: " + nuevoSaldo
  );
} else {
  console.log("Tu salario es de: " + salarioEmpl);
}
