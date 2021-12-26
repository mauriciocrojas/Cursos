//let contador = 0;

/*
while(contador<3){
    console.log(contador);
    contador++;
}
*/

/*
do{
    console.log(contador);
    contador++;
}while(contador<3);

*/

/*
for (let contador=0; contador<3; contador++){
console.log(contador);
}
*/

/*break

for (let contador = 0; contador < 11; contador++) {
  if (!(contador % 2)) {
    console.log(contador);
    if (contador == 4) break; //rompe iteración
  }
}
*/



/*continue
for(let contador=0; contador<=10; contador++){
    if(contador%2) continue;//ir a siguiente iteración
    console.log(contador);
}
*/


//etiquetas label (no recomendable)
inicio:
for(let contador=0; contador<=10; contador++){
    if(contador%2) continue inicio;
    console.log(contador);
}

console.log("Fin de ciclo");
