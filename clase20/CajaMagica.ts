import { Personaje } from "./Personaje";

class CajaMagica {
  habilidadNueva(personaje: Personaje, nuevaHabilidad: string): void {
    personaje.nuevaHabilidad = () => {
      console.log(
        `${personaje.nombre} ha aprendido una nueva habilidad poderosa: ${nuevaHabilidad}`
      );
    };
  }
}
export { CajaMagica };
