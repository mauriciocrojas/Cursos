//Operador Ternario
let resultado = 3 > 2 ? "Verdadero" : "Falso";
console.log(resultado);

let numero = 9;
resultado = numero % 2 == 0 ? "Es par" : "Es impar";
console.log(resultado);

/**********/

let miNumero = "10";
console.log(typeof miNumero, miNumero);

let edad = Number(miNumero);
console.log(typeof edad, edad);

if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log("Muy joven para votar");
}

//Con operador ternario
resultado = edad >= 18 ? "Si vota" : "No vota";
console.log(resultado);

/***********/
//isNaN pregunta si NO es un numero

let miNumero2= "18x";

edad = Number(miNumero2);
console.log(edad);

resultado = isNaN(edad)? "No es un numero" : "Sí es un numero";
console.log(resultado);
