import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
  constructor(marca: string, modelo: string, anio: number) {
    super(marca, modelo, anio);
  }
}
