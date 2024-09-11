var num = 100;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i + " Es multiplo de 2 y 3 al mismo tiempo");
    }
    else if (i % 2 == 0) {
        console.log(i + " Es multiplo de 2");
    }
    else if (i % 3 == 0) {
        console.log(i + " Es multiplo de 3");
    }
    else {
        console.log("No es multiple de 2 ni de 3");
    }
}
