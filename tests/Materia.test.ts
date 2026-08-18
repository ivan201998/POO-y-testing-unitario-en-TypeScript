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
