import * as rls from "readline-sync";

let n1 : number = rls.questionInt("Ingrese un numero entero: ");
let n2 : number = rls.questionInt("Ingrese un segundo numero entero: ");
let n3 : number = rls.questionInt("Ingrese el tercer numero entero: ");

if(n1 > n2 && n1 > n3){
    console.log("El numero mas grande es el: " + n1);
}else if  (n2 > n1 && n2 > n3) {
    console.log("El numero mas grande es el: " + n2);
} else{
    console.log("El numero mas grande es el: " + n3);
}