//Declaración de la función
function miFuncion(a, b) {
    console.log(arguments.length);
     return a + b;
}

//Llamamos función
console.log(miFuncion(2, 3));

//Declaración Función de tipo expresión
let sumar = function (a, b) {return a + b;};

let resultado = sumar(1,2);
console.log(resultado);


//Funciones tipo flecha (arrow)
const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado=sumarFuncionTipoFlecha(3,5);
console.log(resultado);



//Self Invoking //No se puede reutilizar
(function(a,b){
    console.log("Ejecutando la funcion: " + (a+b));
})(3,4);


//Funciones como objetos
console.log(typeof miFuncion);

let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


//Declaración Función de tipo expresión (2)
let sumar2 = function (a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

resultado = sumar2(3,2);
console.log(resultado);