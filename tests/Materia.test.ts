/*
import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {
  test("guarda el nombre asignado al crearlo", () => {
    const profesor = new Profesor("Carlos Gomez", 500);
    expect(profesor.nombre).toBe("Carlos Gomez");
  });

  test("guarda el legajo asignado al crearlo", () => {
    const profesor = new Profesor("Carlos Gomez", 500);
    expect(profesor.legajo).toBe(500);
  });
});
*/
//con pocos test
//con 13 test
/*
import { beforeEach, describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";

describe("Materia", () => {
  let titular: Profesor;
  let adjunto: Profesor;

  beforeEach(() => {
    titular = new Profesor("Carlos Gomez", 500);
    adjunto = new Profesor("Laura Diaz", 501);
  });

  test("guarda el nombre asignado al crearla", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.nombre).toBe("Paradigmas II");
  });

  test("guarda el anio asignado al crearla", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.anio).toBe(2);
  });

  test("guarda la carrera asignada al crearla", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.carrera).toBe("Ingenieria en Sistemas");
  });

  test("asigna correctamente el profesor titular", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.titular.nombre).toBe("Carlos Gomez");
  });

  test("asigna correctamente el profesor adjunto", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.adjunto.legajo).toBe(501);
  });

  test("el titular es una instancia de Profesor", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.titular).toBeInstanceOf(Profesor);
  });

  test("el titular y el adjunto son profesores distintos", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.titular).not.toBe(materia.adjunto);
  });

  test("se crea sin alumnos por defecto", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    expect(materia.alumnos).toHaveLength(0);
  });

  test("permite crearse con una lista de alumnos", () => {
    const alumnos = [new Alumno("Juan", 18, 1001), new Alumno("Ana", 25, 1002)];
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto, alumnos);
    expect(materia.alumnos).toHaveLength(2);
  });

  test("conserva el orden de los alumnos recibidos", () => {
    const alumnos = [new Alumno("Juan", 18, 1001), new Alumno("Ana", 25, 1002)];
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto, alumnos);
    expect(materia.alumnos[0].nombre).toBe("Juan");
    expect(materia.alumnos[1].nombre).toBe("Ana");
  });

  test("los elementos de la lista son instancias de Alumno", () => {
    const alumnos = [new Alumno("Juan", 18, 1001)];
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto, alumnos);
    expect(materia.alumnos[0]).toBeInstanceOf(Alumno);
  });

  test("permite agregar un alumno a la lista existente", () => {
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
    materia.alumnos.push(new Alumno("Pedro", 17, 1003));
    expect(materia.alumnos).toHaveLength(1);
  });

  test("los metodos del alumno siguen disponibles dentro de la materia", () => {
    const alumnos = [new Alumno("Pedro", 17, 1003)];
    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto, alumnos);
    expect(materia.alumnos[0].obtenerEstado()).toBe("Menor de edad");
  });
});
*/
//adaptado a coleccion (alumno*)
import { beforeEach, describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";

describe("Materia", () => {
  let titular: Profesor;
  let adjunto: Profesor;
  let materia: Materia;

  beforeEach(() => {
    titular = new Profesor("Carlos Gomez", 500);
    adjunto = new Profesor("Laura Diaz", 501);
    materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);
  });

  test("guarda sus datos basicos al crearla", () => {
    expect(materia.nombre).toBe("Paradigmas II");
    expect(materia.anio).toBe(2);
    expect(materia.carrera).toBe("Ingenieria en Sistemas");
  });

  test("asigna correctamente el titular y el adjunto", () => {
    expect(materia.titular.nombre).toBe("Carlos Gomez");
    expect(materia.adjunto.legajo).toBe(501);
  });

  test("se crea sin alumnos por defecto", () => {
    expect(materia.cantidadDeAlumnos()).toBe(0);
    expect(materia.tieneAlumnos()).toBe(false);
  });

  test("agrega un alumno y lo refleja en la cantidad", () => {
    const agregado = materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    expect(agregado).toBe(true);
    expect(materia.cantidadDeAlumnos()).toBe(1);
  });

  test("no permite agregar dos alumnos con el mismo legajo", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    const repetido = materia.agregarAlumno(new Alumno("Otro", 30, 1001));
    expect(repetido).toBe(false);
    expect(materia.cantidadDeAlumnos()).toBe(1);
  });

  test("encuentra un alumno por su legajo", () => {
    materia.agregarAlumno(new Alumno("Ana", 25, 1002));
    expect(materia.buscarPorLegajo(1002)?.nombre).toBe("Ana");
  });

  test("devuelve undefined si el legajo no existe", () => {
    expect(materia.buscarPorLegajo(9999)).toBeUndefined();
  });

  test("quita un alumno existente", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    const quitado = materia.quitarAlumno(1001);
    expect(quitado).toBe(true);
    expect(materia.cantidadDeAlumnos()).toBe(0);
  });

  test("no falla al intentar quitar un alumno inexistente", () => {
    const quitado = materia.quitarAlumno(9999);
    expect(quitado).toBe(false);
  });

  test("filtra los alumnos mayores de edad", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    materia.agregarAlumno(new Alumno("Pedro", 17, 1002));
    materia.agregarAlumno(new Alumno("Ana", 25, 1003));
    expect(materia.alumnosMayoresDeEdad()).toHaveLength(2);
  });

  test("filtra los alumnos menores de edad", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    materia.agregarAlumno(new Alumno("Pedro", 17, 1002));
    expect(materia.alumnosMenoresDeEdad()).toHaveLength(1);
  });

  test("devuelve los nombres de todos los alumnos", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    materia.agregarAlumno(new Alumno("Ana", 25, 1002));
    expect(materia.nombresDeAlumnos()).toEqual(["Juan", "Ana"]);
  });

  test("calcula el promedio de edad de los alumnos", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    materia.agregarAlumno(new Alumno("Ana", 22, 1002));
    expect(materia.promedioDeEdad()).toBe(20);
  });

  test("el promedio de edad es 0 cuando no hay alumnos", () => {
    expect(materia.promedioDeEdad()).toBe(0);
  });

  test("modificar la lista devuelta no altera la coleccion interna", () => {
    materia.agregarAlumno(new Alumno("Juan", 18, 1001));
    const copia = materia.listarAlumnos();
    copia.push(new Alumno("Intruso", 40, 9999));
    expect(materia.cantidadDeAlumnos()).toBe(1);
  });
});