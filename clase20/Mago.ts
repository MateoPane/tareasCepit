import { Personaje } from "./Personaje";

class Mago extends Personaje {
  public mana: number;

  constructor(nombre: string, puntosDeVida: number, mana: number) {
    super(nombre, puntosDeVida);
    this.mana = mana;
  }

  atacar(): void {
    console.log(`${this.nombre} ataca con magia`);
  }

  defender(): void {
    console.log(`${this.nombre} se defiende con un escudo magico`);
  }

  tirarHechizo(): void {
    console.log(`${this.nombre} tiro un hechizo.`);
  }
}
export { Mago };
