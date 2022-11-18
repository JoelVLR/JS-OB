//metodos de cadenas de texto parte 3
//https://regexr.com
let texto_largo = 
"Tito no es un mono cualquiera. a tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nuece que se caen de los árboles"
console.log(texto_largo.match(/no/g))
//¿existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"))//devuelve un false o true si esta la palabra.

//saber si un texto empieza con una palabra
console.log(texto_largo.startsWith())

//saber si un texto termana con otra palabra
console.log(texto_largo.endsWith())
