//Forma menos comun de creacion de objetos
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido = "Lara";
persona2.direccion = "Saturno 15";
persona2.telefono = "121212";

//Forma más comun de creacion de objetos
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@mail.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
console.log(persona.nombreCompleto());
console.log(persona["apellido"]);

//for in
for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

persona.telefono = "21312"; //agregar datos al objeto
persona.telefono = "33333"; //o cambiarlos
console.log(persona);

delete persona.telefono; //eliminar un dato del objeto
console.log(persona);

//Formas de imprimir objetos

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

//Sintaxis de object
let personaArray = Object.values(persona);
console.log(personaArray);

//Metodo JSON stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

////////////

//Metodos get y set en objetos
let persona3 = {
  nombre: "Yuan",
  apellido: "Jerez",
  email: "yjerez@mail.com",
  edad: 18,
  idioma: "es",
  get lang(){
      return this.idioma.toUpperCase();
  },
  set lang(lang){
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
};

console.log(persona3.nombreCompleto); //con el metodo get no hacen falta ()
console.log(persona3.lang);

persona3.lang = "en"; //probando metodo set
console.log(persona3.lang);
console.log(persona3.idioma);



