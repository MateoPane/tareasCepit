var arr = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var numAlto = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > numAlto) {
        numAlto = arr[i];
    }
}
function parImpar(num) {
    if (num % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}
console.log(numAlto + " es el numero mas alto del array");
console.log("y este es: " + parImpar(numAlto));
