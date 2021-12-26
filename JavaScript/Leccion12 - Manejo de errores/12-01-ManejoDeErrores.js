"use strict";

try {
  let z = 10;
  //p = 10;
  //miFuncion();
  throw "Mi error";
} 
catch (error) {
    console.log(error);
}
finally{
    console.log("Termina la revisión de errores");
}

console.log("continuamos");

//try posible error
//catch mensaje de error, solo se ejecuta si try encuentra un error
//(opcional) finally siempre se ejecuta


let resultado = 5;

try{
    //k=10;
    if(isNaN(resultado)) throw "No es un numero";
    else if(resultado ==="") throw "Es cadena vacía";
    else if(resultado>=0) throw "Valor positivo";
    else if(resultado<0) throw "Valor negativo";

}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log("Termina la revisión de errores");
}