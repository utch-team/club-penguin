/*
VARIABLES
-var: ser modificadas y re-declaradas dentro de su ámbito;
-let: pueden ser modificadas, pero no re-declaradas;
-const:no pueden ser modificadas ni re-declaradas;
*/

var a;
let b;
const c = 0;

// FUNCIONES declarativas y de expresión

// - Function declaration:
function doStuff() {}
// - Function expression:
const doStuff = function () {};

// IIFE-immediately invoked function expressions
(() => {})();

// HOISTING;
// It’s easy to understand with an example:

doStuff();
function doStuff() {}
// The above does not throw an error, but this would:
doStuff();
const doStuff = () => {};

// SCOPE
// local, global, bloque

// ASIGNACIÓN, COMPARACIÓN y ARITMÉTICOS.

// IF, ELSE, ELSE IF, SWITCH

let x = 5;
if (x > 0) {
  console.log("x is greater than 0");
} else if (x === 0) {
  console.log("x is equal to 0");
} else {
  console.log("x is less than 0");
}

let s = "apple";
switch (s) {
  case "apple":
    console.log("x is an apple");
    break;
  case "banana":
    console.log("x is a banana");
    break;
  case "orange":
    console.log("x is an orange");
    break;
  default:
    console.log("x is something else");
}

// LOOPS while, for, for of

while (true) {
  // code
}

const unNumero = 10;
for (i = 0; i <= unNumero; i++) {
  // code
}

unArreglo = [];
for (const a of unArreglo) {
  console.log(a);
}
