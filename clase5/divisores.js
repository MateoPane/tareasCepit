function esMultiplo(num, num2) {
    return num % num2 === 0;
}
function cantidadDeDivisores(num) {
    var cantidad = 0;
    for (var i = 1; i <= num; i++) {
        if (esMultiplo(num, i)) {
            cantidad++;
        }
    }
    return cantidad;
}
console.log(cantidadDeDivisores(16)); //imprime 4
