// trabajando con objetos
const obj = {
    id: 4,
    nombre: "juan",
    apellido: "gonzález",
    isDeveloper:true,
    libros_favoritos:["El método","El código de la manifestación"],
    "4-juegos":[1,2,3,4]
}

console.log(obj["4-juegos"])
console.log(obj.id)

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj

console.log(obj2);

obj2.nombre = "coca"

console.log(obj2.nombre)

console.log(obj.nombre)

let val1=4
let val2 = val1

val2=6

console.log(val1)
console.log(val2)

const obj3 ={...obj};

console.log(obj.nombre);

console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre);
console.log(obj3.nombre);

// cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    {titulo:"Lo que el viento se llevo", anyo:1939},
    {titulo:"titanic", anyo:1997},
    {titulo:"moana", anyo:2016},
    {titulo:"el efecto mariposa", anyo:2004},
    {titulo:"ted", anyo:2012},
]

console.log(listaPeliculas)

// .sort () -> muta el valor de la lista original

listaPeliculas.sort((a,b) => a.anyo - b.anyo);

console.log(listaPeliculas);