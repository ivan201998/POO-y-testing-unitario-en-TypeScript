export class Alumno {
  constructor(
    public nombre: string,
    public edad: number,
    public legajo: number
  ) {}

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  obtenerEstado(): string {
    return this.esMayorDeEdad() ? "Mayor de edad" : "Menor de edad";
  }
}
