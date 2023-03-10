// ARREGLOS Y OBJETOS

var salad = ["π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯"];
var salad = new Array("π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯");

// - .length;  //cuantos items

// - .push('π₯'); // agrega item

// - .pop(); // elimina ultimo item

// - .shift() // elimina primer item

// - .slice(); // copia el array
var ensalada = ["π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯"];
var ensaladaCopy = ensalada.slice();

// -.isArray()
Array.isArray(["π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯"]); // returns true
Array.isArray("π"); // returns false
Array.isArray({ tomate: "π" }); // returns false
Array.isArray([]); // returns true

// -DesestructuraciΓ³n  de arreglos
var [tomate, hongo, zanahoria] = ["π", "π", "π₯"];
console.log(tomate, hongo, zanahoria); // Output, π π π₯
// -------------------------------------------------
var [tomate, hongos = "π"] = ["π"];
console.log(tomate); // 'π'
console.log(hongos); // 'π'

// -Como usar la sintaxis Spread
var [tomate, hongo, ...rest] = ["π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯"];
console.log(tomate); // 'π'
console.log(hongo); // 'π'
console.log(rest); // ["π₯¦", "π₯", "π½", "π₯", "π₯"]
// --------------------------------------------------------
var ensalada = ["π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯"];
var ensaladaCloned = [...ensalada];
console.log(ensaladaCloned); // ["π", "π", "π₯¦", "π₯", "π½", "π₯", "π₯"]
ensalada === ensaladaCloned; // false

// - .concat()
var first = [1, 2, 3];
var second = [4, 5, 6];
var merged = first.concat(second);

// - .join()
var emotions = ["π", "π", "π", "π"];
var joined = emotions.join();
console.log(joined); // "π,π,π,π"
// -------------------------------------------
var joined = emotions.join("<=>");
console.log(joined); // "π<=>π<=>π<=>π"

// - .fill()
var colors = ["red", "blue", "green"];
colors.fill("pink");
console.log(colors); // ["pink", "pink", "pink"]

// - .includes()
var names = ["tom", "alex", "bob", "john"];
names.includes("tom"); // returns true
names.includes("july"); // returns false

// - .indexOf()
var nombres = ["tom", "alex", "bob", "john"];
nombres.indexOf("alex"); // returns 1
nombres.indexOf("rob"); // returns -1
// ---------------------------------------
var nombres = ["tom", "alex", "bob", "tom"];
nombres.indexOf("tom"); // returns 0
nombres.lastIndexOf("tom"); // returns 3

// - .reverse()
var nombres = ["tom", "alex", "bob"];
nombres.reverse(); // returns ["bob", "alex", "tom"]
