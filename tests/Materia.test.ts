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