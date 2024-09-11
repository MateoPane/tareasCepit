function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
var i;
for (i = 1; i <= 10; i++) {
    console.log("El area es = " + calcularAreaTriangulo(i, i * 2));
}
