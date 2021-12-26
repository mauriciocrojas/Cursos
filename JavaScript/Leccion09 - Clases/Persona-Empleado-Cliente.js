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


class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo=sueldo;
        this._idEmpleado = Empleado.contadorEmpleados++;
    }

    get idEmpleado() {
        return this._idEmpleado;
      }
    
      get sueldo() {
        return this._sueldo;
      }
    
      set sueldo(sueldo) {
        this._sueldo = sueldo;
      }


    
      toString(){
        //o
        //return super.toString() + bla bla bla
        return  "IdEmpleado: " + this._idEmpleado + " " + super.nombreCompletoYSueldo() + " " + this._sueldo;
      }
    
}



class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro= fechaRegistro;
        this._idCliente = Cliente.contadorClientes++;
    }

    get idCliente() {
        return this._idCliente;
      }
    
      get fechaRegistro() {
        return this._fechaRegistro;
      }
    
      set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
      }
    
      toString(){
        return  "IdCliente: " + this._idCliente + " " + super.nombreCompletoYSueldo() + " Registro: " + this._fechaRegistro;
      }
}


//Prueba clase Persona

let persona1=new Persona ("Juan", "Perez", "22");
console.log(persona1.toString())

let persona2=new Persona ("Carlos", "Lara", "23");
console.log(persona2.toString())


//Prueba clase Empleado

let empleado1 = new Empleado("Jere", "Perez", "31", 2222);
console.log(empleado1.toString())

let empleado2 = new Empleado("Gaga", "Hehe", "77", 5656);
console.log(empleado2.toString())


//Prueba clase Cliente

let cliente1 = new Cliente("Fefa", "Kio", "41", new Date());
console.log(cliente1.toString())

let cliente2 = new Cliente("Lare", "Led", "47", new Date());
console.log(cliente2.toString())