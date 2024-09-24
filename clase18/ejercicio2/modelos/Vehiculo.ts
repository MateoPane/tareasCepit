export class Vehiculo {
  private marca: string;
  private modelo: string;
  private anio: number;

  constructor(marca: string, modelo: string, anio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  public getMarca(): string {
    return this.marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getAnio(): number {
    return this.anio;
  }

  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public setAnio(anio: number): void {
    this.anio = anio;
  }
}
