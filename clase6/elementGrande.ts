/*const arrr: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numAlto: number = 0;
for (let i = 0; i < arrr.length; i++) {
  if (arrr[i] > numAlto) {
    numAlto = arrr[i];
  }
}
function parImpar(num: number): string {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log(numAlto + " es el numero mas alto del array");
console.log("y este es: " + parImpar(numAlto));






















function establecerColorPorNota(valor: number): string {
  let aprobado: string = "verde";
  let desaprobado: string = "rojo";

  let resultado: string;
  if (valor >= 0 && valor < 7) {
    resultado = desaprobado;
  } else if (valor >= 7 && valor <= 10) {
    resultado = aprobado;
  } else {
    return "No hizo el examen";
  }
  return resultado;
}
console.log(establecerColorPorNota(8));*/

// Pone mal los and seria &&, despues declara 7 en un string y escrito, tiene que ir 7, retorna rojo que no esta declarado
// y sin comillas, con el elseif pasa lo mismo con el and y el verde, y despues retorna un gris que no esta declarado en ningun lado

// Corregir los errores que encuentre:

/*function sumarArreglo(arreglo: number[]): number {
  let suma: number = 0;
  let i: number = 0;
  for (i; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
let arr: number[] = [1, 2, 3, 4, 5];
console.log(sumarArreglo(arr));
*/
//No tenia declarada la variable indice del for, y retornaba el arreglo en vez de la suma de este.

//Corregir los errores que encuentre:

/*function obtenerPromedio(arr: number[]): number {
  let suma: number = sumarArreglo(arr);
  let promedio: number = suma / arr.length;
  return promedio;
}
let arrNums: number[] = [4, 3];
console.log(obtenerPromedio(arrNums));*/
// el error estaba en que, en la variable promedio sacaba el resto(%) en vez del promedio(/) y usaba un console.log en vez de un return
// para que muestre el resultado.

// Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y O que hay en ese string
// y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.
// Pegar el codigo aquí.

let cadenaText: string = "hola como andas, texto rellenador para completar";

let contadorA: number = 0;
let contadorE: number = 0;
let contadorO: number = 0;

for (let i = 0; i < cadenaText.length; i++) {
  let cadenaTextMayus = cadenaText[i].toUpperCase();
  if (cadenaTextMayus == "A") {
    contadorA++;
  } else if (cadenaTextMayus == "E") {
    contadorE++;
  } else if (cadenaTextMayus == "O") {
    contadorO++;
  }
}
let arregloContador: number[] = [contadorA, contadorE, contadorO];
console.log(arregloContador);
