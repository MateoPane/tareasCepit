import { Personaje } from "./Personaje";

class Luchador extends Personaje {
  public fuerza: number;

  constructor(nombre: string, puntosDeVida: number, fuerza: number) {
    super(nombre, puntosDeVida);
    this.fuerza = fuerza;
  }

  golpear(): void {
    console.log(`${this.nombre} golpeo!`);
  }
}
export { Luchador };
