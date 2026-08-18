export class Alumno {
  constructor(
    public nombre: string,
    public edad: number
  ) {}

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }
}
