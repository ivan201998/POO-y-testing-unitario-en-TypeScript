//con 13 test
import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";
import { Persona } from "../src/Persona";

describe("Profesor", () => {
  test("guarda el nombre asignado al crearlo", () => {
    const profesor = new Profesor("Carlos Gomez", 500);
    expect(profesor.nombre).toBe("Carlos Gomez");
  });

  test("guarda el legajo asignado al crearlo", () => {
    const profesor = new Profesor("Carlos Gomez", 500);
    expect(profesor.legajo).toBe(500);
  });

  test("el nombre es de tipo string", () => {
    const profesor = new Profesor("Laura Diaz", 501);
    expect(typeof profesor.nombre).toBe("string");
  });

  test("el legajo es de tipo number", () => {
    const profesor = new Profesor("Laura Diaz", 501);
    expect(typeof profesor.legajo).toBe("number");
  });

  test("permite crear un profesor con nombre compuesto", () => {
    const profesor = new Profesor("Maria del Carmen Lopez", 502);
    expect(profesor.nombre).toBe("Maria del Carmen Lopez");
  });

  test("permite crear un profesor con legajo de un digito", () => {
    const profesor = new Profesor("Ernesto Ruiz", 7);
    expect(profesor.legajo).toBe(7);
  });

  test("permite crear un profesor con legajo de varios digitos", () => {
    const profesor = new Profesor("Ernesto Ruiz", 987654);
    expect(profesor.legajo).toBe(987654);
  });

  test("dos profesores distintos tienen nombres distintos", () => {
    const uno = new Profesor("Carlos Gomez", 500);
    const otro = new Profesor("Laura Diaz", 501);
    expect(uno.nombre).not.toBe(otro.nombre);
  });

  test("dos profesores distintos tienen legajos distintos", () => {
    const uno = new Profesor("Carlos Gomez", 500);
    const otro = new Profesor("Laura Diaz", 501);
    expect(uno.legajo).not.toBe(otro.legajo);
  });

  test("dos instancias con los mismos datos no son el mismo objeto", () => {
    const uno = new Profesor("Carlos Gomez", 500);
    const otro = new Profesor("Carlos Gomez", 500);
    expect(uno).not.toBe(otro);
  });

  test("dos instancias con los mismos datos tienen contenido equivalente", () => {
    const uno = new Profesor("Carlos Gomez", 500);
    const otro = new Profesor("Carlos Gomez", 500);
    expect(uno).toEqual(otro);
  });

  test("la instancia creada pertenece a la clase Profesor", () => {
    const profesor = new Profesor("Carlos Gomez", 500);
    expect(profesor).toBeInstanceOf(Profesor);
  });

  test("permite modificar el nombre despues de crearlo", () => {
    const profesor = new Profesor("Carlos Gomez", 500);
    profesor.nombre = "Carlos A. Gomez";
    expect(profesor.nombre).toBe("Carlos A. Gomez");
  });
});