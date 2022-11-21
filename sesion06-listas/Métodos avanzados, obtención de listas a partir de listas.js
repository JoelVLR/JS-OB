// trabjar con metodos mas avanzados
// .map() .filter) .reduce()
const array =["san sebastian", "madrid", "barcelona", "alicante", "bilbao"];

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray =array.map((valor,indice) => `${indice + 1} - ${valor}`)

console.log(newArray);

const listaObjetos = [
    {nombre:"leire", edad:35},
    {nombre:"lulu", edad:34},
    {nombre:"lele", edad:28},
    {nombre: "pepe", edad:3},
    {nombre:"joel", edad:28},
]

/*const personasMayores = listaObjetos.filter(obj =>{
    if(obj.edad >30) {
        return true
    } else {
        return false
    }
}) */
const personasMayores = listaObjetos.filter (obj => obj.edad >30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj =>obj.nombre !== "lele")
console.log(nuevaLista);

//uso de .reduce

const valores = [3,56,23,5,90,100];

const suma = valores.reduce((acumulado,cur,i,arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);

    return acumulado + cur
});

console.log(suma);

