let a = 3,
  b = 2;
c = "3";

let z = a == c; //se revisa el valor sin importar el tipo
console.log(z);

z = a === c; //se revisa el valor pero tambien los tipos
console.log(z);

/*----------*/

z = a != c; //se revisa el valor sin importar el tipo
console.log(z);

z = a !== c; //se revisa el valor pero tambien los tipos
console.log(z);

/*----------*/

z = a < b;
console.log(z);

z = a > c;
console.log(z);

z = a <= b;
console.log(z);

z = a >= c;
console.log(z);