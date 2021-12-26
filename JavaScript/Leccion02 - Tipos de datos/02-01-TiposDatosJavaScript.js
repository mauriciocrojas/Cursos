/*
Tipos de datos JS
*/

//Tipo string
let nombre = "Ubaldo";
console.log(typeof nombre, nombre);

nombre = 44;
console.log(typeof nombre, nombre);

nombre = 1.5;
console.log(typeof nombre, nombre);

//Tipo number
let numero = 1000;
console.log(numero);

//Tipo object
let objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "123456",
};
console.log(typeof objeto);
console.log(objeto);

//Tipo booleano (true,false)
let flag = true;
console.log(typeof flag, flag);

//Tipo function
function miFuncion() {}
console.log(miFuncion, typeof miFuncion);

//Tipo Symbol
let simbolo = Symbol("mi simbolo");
console.log(simbolo, typeof simbolo);

//Tipo Clase (es una function)
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona, typeof Persona);

//Tipo undefined
let x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x, typeof x);

//null = ausencia de valor
let y = null;
console.log(typeof y, y);

//Array
let autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Cadena vacia
let z="";
console.log(z);
console.log(typeof z);