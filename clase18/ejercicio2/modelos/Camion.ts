import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  constructor(marca: string, modelo: string, anio: number) {
    super(marca, modelo, anio);
  }
}
