// .sort() -> metodo que modifica el array (forma mas eficiente)
const array =[2,5,9,15,1,2,0,4];

console.log(array)

/*array.sort((anterior,b-siguiente)=>{
    
})*/

array.sort((a,b)=>{
    if(a<b){
        return +1
    }else if(a>b){
        return -1
    } else {//a===B
    return 0}
})

console.log(array)

//ordenar unicamente arrays numericos

const arrayNumerico = [ 4,1,7,3,1,3,56,1,546]

arrayNumerico.sort((a,b)=>b-a)

console.log(arrayNumerico);

//Interesante en arrays objetos

const listaObjetos = [
    {nombre:"leire", edad:35},
    {nombre:"lulu", edad:34},
    {nombre:"lele", edad:28},
    {nombre: "pepe", edad:3},
    {nombre:"joel", edad:28},
]

/*listaObjetos.sort((a,b)=>{
    if (a.edad < b.edad){
        return -1 /*(indice menor que ve)*/
   /* } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
})*/

listaObjetos.sort((a,b) => a.edad - b.edad)

console.log(listaObjetos)
