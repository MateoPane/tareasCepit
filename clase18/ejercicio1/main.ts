import { Alumno } from "./modelos/Alumno";
import { Profesor } from "./modelos/Profesor";
import { Escuela } from "./modelos/Escuela";

function main() {
  const alumno = new Alumno("Pedro", 5);
  const alumno2 = new Alumno("Mateo", 2);
  const alumno3 = new Alumno("Ana", 10);

  const profesor = new Profesor("Franco");

  const escuela = new Escuela();
  escuela.añadirProfesor(profesor);

  escuela.matricularAlumno(alumno);
  escuela.matricularAlumno(alumno2);
  escuela.matricularAlumno(alumno3);

  profesor.agregarAlumno(alumno);
  profesor.agregarAlumno(alumno3);
  profesor.agregarAlumno(alumno2);

  console.log(`Alumnos de ${profesor.getNombre()}:`);
  profesor.getAlumnos().forEach((alumno) => {
    console.log(
      `- ${alumno.getNombre()} (${
        alumno.aprobo() ? "Aprobado" : "Desaprobado"
      })`
    );
  });

  escuela.expulsarAlumno(alumno2);
  console.log(`Alumnos matriculados dsps de expulsar:`);
  escuela.getAlumnos().forEach((alumno) => {
    console.log(`- ${alumno.getNombre()}`);
  });
}

main();
