import * as rls from "readline-sync";

let palabraA: string = "Juan Perez";

let inicialNombre: string = palabraA[0];
let inicialApellido: string = palabraA[5];

console.log(
  `El se llama:  ${palabraA} Su inicial de nombre es  ${inicialNombre} y su apellido es  ${inicialApellido}`
);

let arr: string[] = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let array2: string = "Hola hoy voy a mostrar como hola hacer una torta hola ";
console.log(array2.substr(0, 19));
/*









*/

let cantidad: number = rls.questionInt("Ingrese la cantidad de numeros:");

let v: number[] = new Array(cantidad);

function cargarVector(v: number[], cantidad: number) {
  for (let i = 0; i < cantidad; i++) {
    v[i] = rls.questionInt(`Ingrese el numero en la posicion ${i}: `);
  }
}

function mostrarVector(v: number[], cantidad: number) {
  for (let i = 0; i < cantidad; i++) {
    console.log(v[i] + " ");
  }
}

function mostrarVectorInvertido(v: number[], cantidad: number) {
  for (let i = cantidad - 1; i >= 0; i--) {
    console.log(v[i] + " ");
  }
}

function invertirVector(v: number[], cantidad: number) {
  let indiceIzq: number = 0;
  let indiceDer: number = cantidad - 1;
  let aux: number;
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
