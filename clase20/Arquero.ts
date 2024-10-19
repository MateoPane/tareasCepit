import { Personaje } from "./Personaje";

class Arquero extends Personaje {
  public punteria: number;

  constructor(nombre: string, puntosDeVida: number, punteria: number) {
    super(nombre, puntosDeVida);
    this.punteria = punteria;
  }

  tirarFlecha(): void {
    console.log(`${this.nombre} ha lanzado una flecha.`);
  }
}
export { Arquero };
