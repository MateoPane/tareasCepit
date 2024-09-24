import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
  private alumnos: Alumno[] = [];
  private profesores: Profesor[] = [];

  public matricularAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  public expulsarAlumno(alumno: Alumno) {
    this.alumnos = this.alumnos.filter((a) => a !== alumno);
  }

  public añadirProfesor(profesor: Profesor) {
    this.profesores.push(profesor);
  }

  public despedirProfesor(profesor: Profesor) {
    this.profesores = this.profesores.filter((p) => p !== profesor);
  }

  public getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  public getProfesores(): Profesor[] {
    return this.profesores;
  }
}
