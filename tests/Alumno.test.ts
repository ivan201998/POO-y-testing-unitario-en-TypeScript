/*import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);

    const resultado = alumno.esMayorDeEdad();

    expect(resultado).toBe(true);
  });

});
*/
import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {
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

  test("un alumno de 20 años obtiene el estado Mayor de edad", () => {
    const alumno = new Alumno("Lucia", 20, 1004);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 15 años obtiene el estado Menor de edad", () => {
    const alumno = new Alumno("Mateo", 15, 1005);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });
});
