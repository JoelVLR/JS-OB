// String o cadenas de caracteres
let str_dbl="hola soy un texto comillas dobles";
let str_sng='hola soy un texto comillas simples'
console.log(str_dbl);
console.log(str_sng);

let str_comillas="el otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples='El otro dia me dijo literalmente \'ve a sacar la basura\'';
let str_comillas_dobles="el otro dia me dijo literalmente 've a sacar la basura'";
let str_comillas_simples_2='el otro dia me dijo literalmente"ve a sacar la basura"';

console.log(str_comillas);
console.log(str_comillas_simples_2);
console.log(str_comillas_dobles);

//comillas invertidas

let str_backlicks = `hola es un string con backticks`;
console.log(str_backlicks);
 let nombre = "joel";
 let saludo = `Hola ${nombre} bienvenido`;

 console.log(saludo);

 //plantillas HTML
 let plantilla =`<html>
 <h1>Pagina web ${nombre}</h1>
 <p>Esto es un parrafo>/p>
 </html>`;

 //introducción de variables en html

 let libros =[
    "empieza por el por que",
    "el monje que vendio u ferrari",
    "el poder del ahora"
];
 

 console.log(plantilla);