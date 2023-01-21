// ARREGLOS Y OBJETOS

var salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
var salad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

// - .length;  //cuantos items

// - .push('🥜'); // agrega item

// - .pop(); // elimina ultimo item

// - .shift() // elimina primer item

// - .slice(); // copia el array
var ensalada = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
var ensaladaCopy = ensalada.slice();

// -.isArray()
Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]); // returns true
Array.isArray("🍅"); // returns false
Array.isArray({ tomate: "🍅" }); // returns false
Array.isArray([]); // returns true

// -Desestructuración  de arreglos
var [tomate, hongo, zanahoria] = ["🍅", "🍄", "🥕"];
console.log(tomate, hongo, zanahoria); // Output, 🍅 🍄 🥕
// -------------------------------------------------
var [tomate, hongos = "🍄"] = ["🍅"];
console.log(tomate); // '🍅'
console.log(hongos); // '🍄'

// -Como usar la sintaxis Spread
var [tomate, hongo, ...rest] = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
console.log(tomate); // '🍅'
console.log(hongo); // '🍄'
console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
// --------------------------------------------------------
var ensalada = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
var ensaladaCloned = [...ensalada];
console.log(ensaladaCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
ensalada === ensaladaCloned; // false

// - .concat()
var first = [1, 2, 3];
var second = [4, 5, 6];
var merged = first.concat(second);

// - .join()
var emotions = ["🙂", "😍", "🙄", "😟"];
var joined = emotions.join();
console.log(joined); // "🙂,😍,🙄,😟"
// -------------------------------------------
var joined = emotions.join("<=>");
console.log(joined); // "🙂<=>😍<=>🙄<=>😟"

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
