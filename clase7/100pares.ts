let numPar: number = 0;

let contador: number = 0;

if (numPar % 2 === 0) {
  for (let i = 0; i < 100; i++) {
    contador += numPar;
    numPar += 2;
    console.log(numPar);
  }
}
