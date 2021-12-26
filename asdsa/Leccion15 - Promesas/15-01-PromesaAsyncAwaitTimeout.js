//Promesas, await, async, y setTimeout

async function funcionConPromesaYAwaitTimeout() {
    console.log("Inicio funcion");
  let miPromesa = new Promise((resolved) => {
    setTimeout(() => resolved("Promesa con await y timeout"), 3000);
  });
  console.log(await miPromesa);
  console.log("Fin funcion");

}

funcionConPromesaYAwaitTimeout();