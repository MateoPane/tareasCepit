import { Alumno } from "./Alumno";

export class Profesor {
  private nombre: string;
  private alumnos: Alumno[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  public quitarAlumno(alumno: Alumno) {
    this.alumnos = this.alumnos.filter((a) => a !== alumno);
  }

  public getAlumnos(): Alumno[] {
    return this.alumnos;
  }
}
