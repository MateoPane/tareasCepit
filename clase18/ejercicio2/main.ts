import { Auto } from "./modelos/Auto";
import { Camion } from "./modelos/Camion";
import { Moto } from "./modelos/Moto";
import { RegistroAutomotor } from "./modelos/RegistroAutomotor";

function main() {
  const registro = new RegistroAutomotor();

  const auto = new Auto("Toyota", "Supra", 1998);
  const auto2 = new Auto("Nissan", "Skyline", 2002);
  const moto = new Moto("Kawasaki", "Ninja", 2019);
  const moto2 = new Moto("Bmw", "SR1000", 2020);
  const camion = new Camion("Renault", "Kerax", 2012);
  const camion2 = new Camion("Ford", "Cargo 1722", 2013);

  registro.agregarVehiculo(auto);
  registro.agregarVehiculo(auto2);
  registro.agregarVehiculo(moto);
  registro.agregarVehiculo(moto2);
  registro.agregarVehiculo(camion);
  registro.agregarVehiculo(camion2);

  console.log("Lista inicial de vehiculos:");
  registro.listarVehiculos();

  auto2.setModelo("Skyline GTR");
  registro.modificarVehiculo(1, auto2);

  moto.setModelo("Ninja H2");
  registro.modificarVehiculo(2, moto);

  camion.setModelo("Kerax 440");
  registro.modificarVehiculo(4, camion);

  registro.darDeBaja(5);

  console.log("Lista de vehiculos:");
  registro.listarVehiculos();
}

main();
