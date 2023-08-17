// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Javascript es un lenguaje dinamico (no es tipado)

// NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

console.log("1 / 0 = " + var1 / var2); // error o otra cosa Infinity?
console.log("0 / 0 = " + var2 / var2); // Error o otra cosa NaN
console.log(Number.MAX_VALUE);
console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));

// STRING
let saludo1 = 'Hola "mundo"';
let saludo2 = "Hola mundo'";
let caracter = "c"; // es un string
let nombre = "Pedro";
let saludo3 = `Hola mundo: ${nombre} bienvenido`; //backtick
let pizza = "🍕";

// Null: representa la ausencia de algun valor
let nulo = 45;
nulo = null;
console.log(nulo);

// Undefined: propiedad de un objeto que no existe o variable no asignada
let sinvalor = "Pedro";
console.log(sinvalor.MiPropiedad);

// NOTA para mas adelante. Para hacer el lenguaje mas tipado, se utiliza Typescript

// Parseo de numeros
let cadenaNumero = "34";
cadenaNumero = parseInt(cadenaNumero) + 1;
console.log(cadenaNumero);

// Declaración de Objetos dinámicos
let empleado1 = { Nombre: "Julian", Apellido: "Alvarez", Edad: 28 };
console.log(`Nombre del empleado:${empleado1.Nombre}`);
console.log(`Edad del empleado: ${empleado1["Edad"]}`);

// Orientado a Objetos && Lenguaje Funcional
