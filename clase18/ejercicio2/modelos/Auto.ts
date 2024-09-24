import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
  constructor(marca: string, modelo: string, anio: number) {
    super(marca, modelo, anio);
  }
}
