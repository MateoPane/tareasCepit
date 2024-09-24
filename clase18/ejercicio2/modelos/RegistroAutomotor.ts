import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
  private vehiculos: Vehiculo[] = [];

  public agregarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculos.push(vehiculo);
  }

  public getVehiculo(index: number): Vehiculo | null {
    return this.vehiculos[index] || null;
  }

  public modificarVehiculo(index: number, vehiculo: Vehiculo): void {
    if (this.vehiculos[index]) {
      this.vehiculos[index] = vehiculo;
    }
  }

  public darDeBaja(index: number): void {
    if (this.vehiculos[index]) {
      this.vehiculos.splice(index, 1);
    }
  }

  listarVehiculos(): void {
    this.vehiculos.forEach((vehiculo, index) => {
      console.log(
        `Vehiculo ${
          index + 1
        }: ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAnio()})`
      );
    });
  }
}
