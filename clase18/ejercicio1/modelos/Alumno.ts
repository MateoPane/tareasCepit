export class Alumno {
  private nombre: string;
  private nota: number;

  constructor(nombre: string, nota: number) {
    this.nombre = nombre;
    this.nota = nota;
  }

  public getNombre(): string {
    return this.nombre;
  }

  aprobo(): boolean {
    return this.nota >= 7;
  }
}
