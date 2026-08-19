import { Persona } from "./Persona";

export class Profesor extends Persona {
  constructor(nombre: string, legajo: number) {
    super(nombre, legajo);
  }
}