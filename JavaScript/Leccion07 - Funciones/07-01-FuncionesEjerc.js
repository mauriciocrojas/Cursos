let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for (let i=0; i<arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}


//Paso por valor //Tipos primitivos
let x=10;

function cambiarValor(a){
    a=20;
}
//a=x a=10 a=20
cambiarValor(x);//10
console.log(x);



//Paso por referencia
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

cambiarValorObjeto(persona);

console.log(persona);