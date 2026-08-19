/*
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Materia {
  constructor(
    public nombre: string,
    public anio: number,
    public carrera: string,
    public titular: Profesor,
    public adjunto: Profesor,
    public alumnos: Alumno[] = []
  ) {}
}
  */
 //adaptado a coleccion (alumno*)
 import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Materia {
  private alumnos: Alumno[];

  constructor(
    public nombre: string,
    public anio: number,
    public carrera: string,
    public titular: Profesor,
    public adjunto: Profesor,
    alumnos: Alumno[] = []
  ) {
    this.alumnos = [...alumnos];
  }

  agregarAlumno(alumno: Alumno): boolean {
    if (this.buscarPorLegajo(alumno.legajo)) {
      return false;
    }
    this.alumnos.push(alumno);
    return true;
  }

  quitarAlumno(legajo: number): boolean {
    const indice = this.alumnos.findIndex(a => a.legajo === legajo);
    if (indice === -1) {
      return false;
    }
    this.alumnos.splice(indice, 1);
    return true;
  }

  buscarPorLegajo(legajo: number): Alumno | undefined {
    return this.alumnos.find(a => a.legajo === legajo);
  }

  cantidadDeAlumnos(): number {
    return this.alumnos.length;
  }

  tieneAlumnos(): boolean {
    return this.alumnos.length > 0;
  }

  listarAlumnos(): Alumno[] {
    return [...this.alumnos];
  }

  alumnosMayoresDeEdad(): Alumno[] {
    return this.alumnos.filter(a => a.esMayorDeEdad());
  }

  alumnosMenoresDeEdad(): Alumno[] {
    return this.alumnos.filter(a => !a.esMayorDeEdad());
  }

  nombresDeAlumnos(): string[] {
    return this.alumnos.map(a => a.nombre);
  }

  promedioDeEdad(): number {
    if (this.alumnos.length === 0) {
      return 0;
    }
    const suma = this.alumnos.reduce((acc, a) => acc + a.edad, 0);
    return suma / this.alumnos.length;
  }
}