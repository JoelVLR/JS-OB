//modulo una parte de codogque se puede reutilizar 
//forma de importar / exportar módulos
//1. CommonJS - require
// 2. Import ES6 - import

const moduloMatematicas = require("./modulos/matematicas.js")
//const factorial =moduloMatematicas.factorial;
//const suma =moduloMatematicas.suma;

//const {factorial, suma} = moduloMatematicas;
const { factorial, suma} = require("./modulos/matematicas.js")
const fact = moduloMatematicas.factorial(5)
console.log(fact)

const sum = moduloMatematicas.suma(12,90)

console.log(sum)



//console.log(moduloMatematicas)
