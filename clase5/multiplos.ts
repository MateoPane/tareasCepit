function esMultiplo(num1: number, num2: number): boolean {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esMultiplo(10, 5));
console.log(esMultiplo(7, 3));
