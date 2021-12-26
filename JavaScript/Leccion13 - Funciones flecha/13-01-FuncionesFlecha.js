/*
function miFuncion(){
    console.log("Saludos desde mi función");
}
*/

let miFuncion = function (){
    console.log("Saludos desde mi función");
}

/*
let miFuncionFlecha = () => {
    console.log("Saludos desde mi función flecha");
}
*/

//const miFuncionFlecha = () => console.log("Saludos desde mi función flecha");


//miFuncionFlecha();

/*
const saludar = () => {
    return "Saludos desde función flecha"
}
*/

const saludar = () => "Saludos desde función flecha";
console.log(saludar());


const regresaObjeto = () => ({nombre: "Juan", apellido: "Lara"});
console.log(regresaObjeto())

/*
const funcionConParametros = function(mensaje){
    console.log(mensaje);
}
*/

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje); //si es un solo parámetro, no hace falta los ()
funcionConParametros("Saludos con parametros");

/*
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
*/
const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosParametros(3,5));