//Clases y Herencia

class Persona {
  static contadorPersonas = 0; //atributo de nuestras clases

  //metodo static
  static get MAX_OBJ() {
    return 7;
  }

  email = "Valor default email"; //atributo de nuestros objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      //preincremento para que comience en 1
      this.idPersona = ++Persona.contadorPersonas;
    }
    else {
      console.log("Se han superado el máximo de objetos permitidos");
    }
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  //Dentro de una clase no es necesario declarar con la palabra function
  nombreCompleto() {
    return this.idPersona + ": " + this._nombre + " " + this._apellido;
  }

  //Sobreescribimos el metodo toString heredado de la clase Padre Object.prototype
  toString() {
    //Se aplica polimorfimo (multiples formas en tiempo de ejecución)
    //El metodo que se ejecuta depende si es una referencia de tipo padre
    //o de tipo hija
    return this.nombreCompleto();
  }
  //Static
  static saludar() {
    console.log("Saludos desde método Static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llamamos al constructor de la clase padre
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  //Sobreescritura (modificar comportamiento de metodos de clase padre)
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
//Ejemplo polimorfimo, se usa el metodo nombreCompleto() de la clase padre
console.log(persona1.toString());

let empleado1 = new Empleado("Carlos", "Lara", "Sistemas");
console.log(empleado1);

console.log(empleado1.nombreCompleto());

//Polimorfimo, se llama un metodo definido en la clase padre o hija(en este caso)
//dependiendo de objeto con el que estemos trabajando
console.log(empleado1.toString());

/////////////

//static
//persona1.saludar(); no es posible llamar un metodo static desde un objeto

//A static se accede desde la clase, no el objeto.
//Se heredan de clases padres a hijas

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//Probando el contadorPersonas
console.log(Persona.contadorPersonas);
console.log(Empleado.contadorPersonas);

let persona2 = new Persona("Onto", "Gerez");
console.log(Persona.contadorPersonas);

let empleado2 = new Empleado("Jare", "Tara", "Sistemas");
console.log(Empleado.contadorPersonas);

//Se puede acceder ya que es un atributo del objeto, y no de la clase
console.log(persona1.email);
console.log(empleado1.email);

///////////

let persona3 = new Persona("Ernel", "Terez");
console.log(persona3.toString());

let empleado3 = new Empleado("Kerno", "Fara", "Sistemas");
console.log(empleado3.toString());

console.log(Persona.MAX_OBJ);

let persona4 = new Empleado("AA", "Fara", "Sistemas");
let persona5 = new Empleado("BB", "Fara", "Sistemas");//no se crea el ID porque no queda lugar
console.log(persona4.toString());
console.log(persona5.toString());
