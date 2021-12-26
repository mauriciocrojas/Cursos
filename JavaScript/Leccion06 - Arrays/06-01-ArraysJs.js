//let autos = new array ("BMW", "Mercedes", "Volvo"); //sintaxis antigua (no usar)

const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);

for(let i=0; i<autos.length; i++){
    console.log(i + ": " + autos[i]);
}


autos[1] = "MercedesBenz";
console.log(autos[1]);

autos.push("Ford");//agrega un elemento al final de la lista
console.log(autos);

autos.pop();//elimina ultimo elemento
console.log(autos);

console.log(autos.length);
autos[autos.length]="Cadillac"
console.log(autos);

autos[5]="AnteriorVacio"; //no recomendado dejar elementos vacios
console.log(autos);


//Comprobar si es Array
console.log(typeof autos); //no sirve

console.log(Array.isArray(autos));

console.log (autos instanceof Array);
