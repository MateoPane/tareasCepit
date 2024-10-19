"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("./Mago");
var Luchador_1 = require("./Luchador");
var Arquero_1 = require("./Arquero");
var CajaMagica_1 = require("./CajaMagica");
function main() {
    var mago = new Mago_1.Mago("Veigar", 400, 250);
    var luchador = new Luchador_1.Luchador("Rey IV", 1000, 300);
    var arquero = new Arquero_1.Arquero("Ojo de halcon", 100, 300);
    var cajaMagica = new CajaMagica_1.CajaMagica();
    console.log("-------Turno Mago-------");
    mago.atacar();
    mago.tirarHechizo();
    mago.subirNivel();
    console.log("-------Turno Luchador-------");
    luchador.atacar();
    luchador.golpear();
    luchador.subirNivel();
    console.log("-------Turno Arquero-------");
    arquero.atacar();
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
