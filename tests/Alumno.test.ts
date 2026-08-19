//con 13 test
import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";
import { Persona } from "../src/Persona";

describe("Alumno", () => {
  test("guarda el nombre asignado al crearlo", () => {
    const alumno = new Alumno("Juan", 18, 1001);
    expect(alumno.nombre).toBe("Juan");
  });

  test("guarda la edad asignada al crearlo", () => {
    const alumno = new Alumno("Juan", 18, 1001);
    expect(alumno.edad).toBe(18);
  });

  test("guarda el legajo asignado al crearlo", () => {
    const alumno = new Alumno("Juan", 18, 1001);
    expect(alumno.legajo).toBe(1001);
  });

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18, 1001);
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25, 1002);
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17, 1003);
    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("un alumno de 0 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Bebe", 0, 1004);
    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("un alumno de 65 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Roberto", 65, 1005);
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 20 años obtiene el estado Mayor de edad", () => {
    const alumno = new Alumno("Lucia", 20, 1006);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 15 años obtiene el estado Menor de edad", () => {
    const alumno = new Alumno("Mateo", 15, 1007);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });

  test("un alumno de exactamente 18 años obtiene el estado Mayor de edad", () => {
    const alumno = new Alumno("Sofia", 18, 1008);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de exactamente 17 años obtiene el estado Menor de edad", () => {
    const alumno = new Alumno("Tomas", 17, 1009);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });

  test("obtenerEstado devuelve un valor de tipo string", () => {
    const alumno = new Alumno("Valentina", 22, 1010);
    expect(typeof alumno.obtenerEstado()).toBe("string");
  });
});