abstract class Personaje {
  public nombre: string;
  public nivel: number;
  public puntosDeVida: number;
  nuevaHabilidad?: () => void;

  constructor(nombre: string, puntosDeVida: number) {
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeVida = puntosDeVida;
  }

  subirNivel(): void {
    this.nivel++;
    console.log(`${this.nombre} sube de nivel a ${this.nivel}`);
  }

  abstract atacar(): void;
  abstract defender(): void;
}
export { Personaje };
