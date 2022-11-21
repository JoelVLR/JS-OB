// Sets o conjuntos (en castellano)
const array = [1,2,3,4,5,6,1,2,5];

const miSet = new Set (array)

console.log(array)

console.log(miSet);

// set nos permite asegurarnos que no habra valores repetidos

//.add()

miSet.add(9)

console.log(miSet)

//.delete()

miSet.delete(9)

console.log(miSet)

//.clean

//miSet.clear()

//console.log(miSet)

//.has() (para ver si contiene un valor)

console.log(miSet.has(4))

//.size (conocer el tamaño del set)

console.log(miSet.size);

//iterar

miSet.forEach(valor=>{
    console.log(valor)
})

const it_miSet = miSet.values()

console.log(it_miSet)

const ar_miSet = [...miSet];

console.log(ar_miSet[0]);