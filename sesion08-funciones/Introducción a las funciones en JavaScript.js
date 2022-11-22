//qué son las funciones, cómo se declaran y cómo se utilizan
const nom="Gorka";
//saludar("gorka")

saludar(nom)
function saludar(nombre){
    console.log(nom)
    console.log(`Hola ${nombre}`);
}

//
let nombre_2="Juan"
console.log(nombre_2);

despedir(nombre_2)

function despedir(nombre){
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

///

let persona = {nombre:"juan",Apellido:"González"}
console.log(persona)

saludarPersona(persona);

console.log(persona)

function saludarPersona(objeto) {
    objeto.Apellido = "Villar";
    console.log(`Hola ${objeto.nombre} ${objeto.Apellido}`);
}
saludar()
////

function imprimeNumero(numero=7) { //parametros por defecto
    console.log(numero)
}

imprimeNumero()

/////

function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1,3,9,2,"hola",{id:9})

//////

function suma(...nums){
    return (nums.reduce((a,b)=> a + b))

}

const s = suma(1,2,3,4,9,15)

console.log(s)

////

let variable = "hola"
function multiplicar (a=0,b=0){
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a*b
}

console.log(multiplicar (4,9))

console.log(variable_interna)