//Funciones tipo callback

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
  let res = op1 + op2;
  funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);

//Llamadas asíncronas con uso setTimeout

function miFuncionCallback() {
  console.log("Saludo asíncrono después de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); //después de 3 segundos

setTimeout(function () {
  console.log("Saludo asíncrono 2");
}, 4000);

setTimeout(() => console.log("Saludo asíncrono 3"), 5000);
