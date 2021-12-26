class Persona {

    static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = Persona.contadorPersonas++;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this.apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this.edad;
  }

  set edad(edad) {
    this.edad = edad;
  }

  nombreCompletoYSueldo(){
    return this._nombre + " " + this._apellido + " " + this._edad;
}

  toString(){
    return "Id Persona: " + this._idPersona + " " + this.nombreCompletoYSueldo();
  }
}

