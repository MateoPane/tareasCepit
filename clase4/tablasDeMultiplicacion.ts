import * as rls from "readline-sync";

const primerNum: number = rls.question("Ingrese un numero: ");
const ultNum: number = rls.question(
  "Ingrese hasta que numero quiere que se multiplique."
);
for (let i = 1; i <= ultNum; i++) {
  console.log(`El ${primerNum} multiplicado por ${i} es: ${primerNum * i}`);
}
