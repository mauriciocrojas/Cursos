let miPromesa = new Promise((resolved, rejected) => {
  let expresion = true;
  if (expresion) {
    resolved("Resolvió correcto");
  } else {
    rejected("Se produjo un error");
  }
});

/*
miPromesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
*/

/*
miPromesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/

let promesa = new Promise((resolved) => {
  //console.log("Inicio promesa");
  setTimeout(() => resolved("Saludos con promesa y timeout"), 3000);
  //console.log("Fin promesa");
});

//promesa.then((valor) => console.log(valor));

//--- Async, indica que una función regresa una promesa

async function miFuncionConPromesa() {
  return "Saludos con promesa y async";
}

//miFuncionConPromesa().then(valor => console.log(valor));

//--- Async/Await

async function funcionConPromesaYAwait() {
  let miPromesa = new Promise((resolved) => {
    resolved("Promesa con await");
  });
  console.log(await miPromesa);
}

funcionConPromesaYAwait();
