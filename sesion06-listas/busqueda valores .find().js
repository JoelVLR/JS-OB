//iterar los valores de una lista
const array = ["hola", 2,5,90,false,undefined];
//forma antigua (poco eficiente)
for(let i =0;i<array.length; i++){
    console.log(array[i])
}

//forma ES6 (más eficiente) .forEach()

let suma =0;
const  arrayNums = [3,6,2,77,2,3,93,19]
arrayNums.forEach(valor => {
    suma+=valor;
    console.log(valor)
})
console.log(suma)

//Búsqueda de un valor dentro de una lista .find()

//quiero encontrar el elemento 90

const variable = array.find(valor=>{
if(valor===90){
    return true
}
})
console.log(variable);

const listaObjetos = [
    {nombre:"leire", edad:35},
    {nombre:"lulu", edad:34},
    {nombre:"lele", edad:28},
    {nombre: "pepe", edad:3},
    {nombre:"joel", edad:28},
]

const objeto = listaObjetos.find(o =>  o.nombre === "joel")

console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "joel")
console.log(edad)