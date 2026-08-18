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
