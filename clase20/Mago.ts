import { Personaje } from "./Personaje";

class Mago extends Personaje {
  public mana: number;

  constructor(nombre: string, puntosDeVida: number, mana: number) {
    super(nombre, puntosDeVida);
    this.mana = mana;
  }

  tirarHechizo(): void {
    console.log(`${this.nombre} tiro un hechizo.`);
  }
}
export { Mago };
