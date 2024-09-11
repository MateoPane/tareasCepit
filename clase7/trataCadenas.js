"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var palabraA = "Juan Perez";
var inicialNombre = palabraA[0];
var inicialApellido = palabraA[5];
console.log("El se llama:  ".concat(palabraA, " Su inicial de nombre es  ").concat(inicialNombre, " y su apellido es  ").concat(inicialApellido));
var arr = ["a", "b", "c"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
var array2 = "Hola hoy voy a mostrar como hola hacer una torta hola ";
console.log(array2.substr(0, 19));
/*









*/
var cantidad = rls.questionInt("Ingrese la cantidad de números:");
var v = new Array(cantidad);
function cargarVector(v, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        v[i] = rls.questionInt("Ingrese el n\u00FAmero en la posici\u00F3n ".concat(i, ": "));
    }
}
function mostrarVector(v, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        console.log(v[i] + " ");
    }
}
function mostrarVectorInvertido(v, cantidad) {
    for (var i = cantidad - 1; i >= 0; i--) {
        console.log(v[i] + " ");
    }
}
function invertirVector(v, cantidad) {
    var indiceIzq = 0;
    var indiceDer = cantidad - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
console.log("Cargando");
cargarVector(v, cantidad);
console.log("Mostrando invertido");
mostrarVectorInvertido(v, cantidad);
console.log("Invirtiendo los valores en el vector");
invertirVector(v, cantidad);
console.log("Mostrando vector");
mostrarVector(v, cantidad);
