//funciones de tipo flecha y anónimas

const array = [1,5,6,2,7,12,8,92]

/*const array2 = array.map(function(valor){
    return valor *2

})*/

const array2 = array.map((valor)=> valor*2);

console.log(array2);

/*const dobleDelValor = valor => {
    return valor *2
}*/
const dobleDelValor = valor =>valor*2;
 
console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor);

function doble(valor) {
    return valor *2 
}

//solo puedo acceder a la función tipo flecha despues de ser inicializada

// tambien es una función anonima ya que no la estamos asignando a ningun nombre.



