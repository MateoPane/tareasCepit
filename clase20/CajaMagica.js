"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajaMagica = void 0;
var CajaMagica = /** @class */ (function () {
    function CajaMagica() {
    }
    CajaMagica.prototype.habilidadNueva = function (personaje, nuevaHabilidad) {
        personaje.nuevaHabilidad = function () {
            console.log("".concat(personaje.nombre, " ha aprendido una nueva habilidad poderosa: ").concat(nuevaHabilidad));
        };
    };
    return CajaMagica;
}());
exports.CajaMagica = CajaMagica;
