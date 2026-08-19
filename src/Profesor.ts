import { Persona } from "./Persona";

// Con herencia (lo que tenés)
export class Profesor extends Persona {
  constructor(nombre: string, legajo: number) {
    super(nombre, legajo);// Persona se encarga de asignar
  
  }
}

/*//despues mirar como usar esto
this.legajo//otra forma de ver
    this.nombre
*/