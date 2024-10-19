class Personaje {
  public nombre: string;
  public nivel: number;
  public puntosDeVida: number;
  nuevaHabilidad?: () => void;

  constructor(nombre: string, puntosDeVida: number) {
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeVida = puntosDeVida;
  }
  atacar(): void {
    console.log(`${this.nombre} ataca`);
  }

  defender(): void {
    console.log(`${this.nombre} se defiende`);
  }

  subirNivel(): void {
    this.nivel++;
    console.log(`${this.nombre} sube de nivel a ${this.nivel}`);
  }
}
export { Personaje };
