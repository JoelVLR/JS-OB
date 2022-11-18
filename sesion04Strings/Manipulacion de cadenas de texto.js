//metodos de cadenas de texto parte 2
let input ="Piscis"
let db = "piscis"

// toLowerCase() o toUpperCase()
console.log(input===db)
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toUpperCase()===db.toUpperCase())
console.log(input.toLowerCase()===db.toLowerCase())

//Formas de concatenar dos cadenas de caracteres
let str_1  = "Hola soy la primera cadena"
let str_2="Y yo soy la segunda cadena"

console.log(str_1.concat(str_2))
console.log(str_1+str_2)
console.log(`${str_1} ${str_2}`)

//eliminar espacios al inicio y al final

let str_3="hola soy un string con espacios al final.   "
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//obtener el caracer que hay en cierta posición
let str_4 = "Hola soy el string numero 4" //["H","o","l","a","","s"...]

console.log(str_4.charArt(5))
console.log(str_4)

//obtener la posicion de una palanra dentro de una cadena de caracteres
let str_5 = "hola soy joel y me gusta comer"

console.log(str_5.indexOf("joel"))
console.log(str_5.charArt(9))
console.log(str_5.lastIndexOf("joel"))