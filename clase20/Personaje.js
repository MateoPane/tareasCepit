"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.subirNivel = function () {
        this.nivel++;
        console.log("".concat(this.nombre, " sube de nivel a ").concat(this.nivel));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
