import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { CajaMagica } from "./CajaMagica";

function main() {
  const mago = new Mago("Veigar", 400, 250);
  const luchador = new Luchador("Rey IV", 1000, 300);
  const arquero = new Arquero("Ojo de halcon", 100, 300);
  const cajaMagica = new CajaMagica();

  console.log("-------Turno Mago-------");
  mago.atacar();
  mago.defender();
  mago.tirarHechizo();
  mago.subirNivel();

  console.log("-------Turno Luchador-------");
  luchador.atacar();
  luchador.defender();
  luchador.golpear();
  luchador.subirNivel();

  console.log("-------Turno Arquero-------");
  arquero.atacar();
  arquero.defender();
  arquero.tirarFlecha();
  arquero.subirNivel();

  console.log("El luchador decide abrir una caja magica!!");
  cajaMagica.habilidadNueva(luchador, "Golpe Feroz");

  if (luchador.nuevaHabilidad) {
    luchador.nuevaHabilidad();
  }

  console.log("-------Todos suben de nivel-------");
  mago.subirNivel();
  luchador.subirNivel();
  arquero.subirNivel();
}
main();
