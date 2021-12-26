let reloj = () => {
  let fecha = new Date();
  console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

setInterval(reloj, 1000); //cada 1 seg
