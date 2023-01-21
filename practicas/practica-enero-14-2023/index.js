/*
VARIABLES
-var: ser modificadas y re-declaradas dentro de su ámbito;
-let: pueden ser modificadas, pero no re-declaradas;
-const:no pueden ser modificadas ni re-declaradas;
*/

var a;
let b;
const c = 5;

// FUNCIONES declarativas y de expresión

// - Function declaration:
function doStuff(par) {
  //haz algo
} // - Function expression:
const doStuff = function () {
  return 5;
};
const result = doStuff()(
  // = 5

  // IIFE-immediately invoked function expressions
  () => {
    console.log("Hola mundo");
  }
)();

// HOISTING;
// It’s easy to understand with an example:

doStuff(); // warning
function doStuff() {
  //aqui
}
// The above does not throw an error, but this would:
doStuff2();
const data = "Mucha info";
const doStuff2 = data => {
  const data = data;
};

// SCOPE
// local, global, bloque
const d = 5;
{
  const d = 6;
  d - 3; // 3
}
d - 5; // 0

// ASIGNACIÓN, COMPARACIÓN y ARITMÉTICOS.

// && || = == === != !== / ^ % * + - ++ -- <<= =>>
// < > <= >=

"2" == 2; //true
"4" === 4; //false

// IF, ELSE, ELSE IF, SWITCH

let x = -5;
if (x > 0) {
  console.log("x is greater than 0");
} else if (x === 0) {
  console.log("x is equal to 0");
} else {
  console.log("x is less than 0");
}

switch (s) {
  case "apple": // s === "apple"
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
let s = "orange";
while (s == "orange") {
  // code
}

do {
  // code
} while (s == "orange");

const unNumero = 10;
for (let i = 0; i <= 10; i++) {
  // code
}

const unArreglo = ["❤", "✝"];
for (const a of unArreglo) {
  console.log(a);
}

let i = 0;

while (i <= 100) {
  console.log(i + i++);
}
