//Constructores

//Funcion constructor de objetos tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function(){
      return this.nombre + " " + this.apellido;
  }
}

Persona.prototype.tel = "1212121";

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre);
padre.tel ="44444"
console.log(padre.tel);

let madre = new Persona("Elba", "Lara", "elara@mail.com");
console.log(madre);
console.log(madre.tel);

padre.nombre ="Carlos";
console.log (padre.nombre);

console.log (padre.nombreCompleto());
console.log (madre.nombreCompleto());


//Otras formas de crear un objeto (no recomendable/**/)
let miObjeto1 = new Object(); /**/
let miObjeto2= {};

let miCadena1 = new String("Hola"); /**/
let miCadena2 = "Hola";

let miNumero1 = new Number(1); /**/
let miNumero2 = 1;

let miBoolean1 = new Boolean(false); /**/
let miBoolean2 = false;

let miArreglo1 = new Array(); /**/
let miArreglo2 = [];

let miFuncion1 = new Function(); /**/
let miFuncion2 = function(){};



//Metodo Call
//Uso de call para usar el metodo persona1.nombreCompleto
//con los datos del object persona 2

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}


console.log(persona1.nombreCompleto("Lic", "21111"));

console.log(persona1.nombreCompleto.call(persona2, "Ing", "32323"));



//Metodo Apply
//Uso de apply para usar el metodo persona3.nombreCompleto
//con los datos del object persona 4

let persona3 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
    
}

let persona4 = {
    nombre: "Carlos",
    apellido: "Lara"
}


console.log(persona3.nombreCompleto("Lic", "1341"));

//con el metodo apply se pasa un array con los valores de los argumentos
let arreglo=["Ing", "2342"]
console.log(persona3.nombreCompleto.apply(persona4, arreglo));
//o
console.log(persona3.nombreCompleto.apply(persona4, ["Ing", "2342"]));