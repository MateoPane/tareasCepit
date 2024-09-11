let butacasCine: string[][] = [
  ["libre", "libre", "ocupado", "libre"],
  ["ocupado", "libre", "ocupado", "ocupado"],
  ["libre", "libre", "ocupado", "libre"],
  ["ocupado", "ocupado", "ocupado", "ocupado"],
];

let libres = false;
for (let fila = 0; fila < butacasCine.length; fila++) {
  libres = false;
  for (let columna = 0; columna < butacasCine[fila].length; columna++) {
    if (butacasCine[fila][columna] == "libre") {
      libres = true;
    }
  }
  if (libres == true) {
    console.log(fila);
  }
}
