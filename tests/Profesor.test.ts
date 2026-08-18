import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";

describe("Materia", () => {
  test("guarda sus datos basicos al crearla", () => {
    const titular = new Profesor("Carlos Gomez", 500);
    const adjunto = new Profesor("Laura Diaz", 501);

    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);

    expect(materia.nombre).toBe("Paradigmas II");
    expect(materia.anio).toBe(2);
    expect(materia.carrera).toBe("Ingenieria en Sistemas");
  });

  test("asigna correctamente el titular y el adjunto", () => {
    const titular = new Profesor("Carlos Gomez", 500);
    const adjunto = new Profesor("Laura Diaz", 501);

    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);

    expect(materia.titular.nombre).toBe("Carlos Gomez");
    expect(materia.adjunto.legajo).toBe(501);
  });

  test("se crea sin alumnos por defecto", () => {
    const titular = new Profesor("Carlos Gomez", 500);
    const adjunto = new Profesor("Laura Diaz", 501);

    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto);

    expect(materia.alumnos).toHaveLength(0);
  });

  test("permite crearse con una lista de alumnos", () => {
    const titular = new Profesor("Carlos Gomez", 500);
    const adjunto = new Profesor("Laura Diaz", 501);
    const alumnos = [
      new Alumno("Juan", 18, 1001),
      new Alumno("Ana", 25, 1002)
    ];

    const materia = new Materia("Paradigmas II", 2, "Ingenieria en Sistemas", titular, adjunto, alumnos);

    expect(materia.alumnos).toHaveLength(2);
    expect(materia.alumnos[0].nombre).toBe("Juan");
  });
});
