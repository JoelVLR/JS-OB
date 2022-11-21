//objetos js
//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
    nombre: "Joel",
    apellido:"López",
    edad: 28,
    altura: "1,65 metros",
    eresDesarrollador:true,
}

//Una variable que obtenga tu edad a partir del objeto anterior

const edad = datosPersonales.edad;

console.log(edad);

// Una lista que contenga el objeto con tus datos personales 
//y un nuevo objeto con los datos personales de tus dos mejores amig@s

const datosAmigos1 = {
   nombre:"Miguel", apellido: "Rojas", edad:25, altura: "1.7 metros", eresDesarrollador:true,
   nombre:"Camila", apellido: "Cadiz", edad:26, altura: "1,6 metros", eresDesarrollador:false,
}  

const listaDatospersonales = [
    {nombre: "Joel", apellido:"López", edad: 28, altura: "1,65 metros", eresDesarrollador:true,},
    {nombre:"Miguel", apellido: "Rojas", edad:25, altura: "1.7 metros", eresDesarrollador:true},
    {nombre:"Camila", apellido: "Cadiz", edad:26, altura: "1,6 metros",eresDesarrollador:false},

];

console.log(listaDatospersonales)

// Una nueva lista con los objetos de la lista anterior 
//ordenados por edad, de mayor a menor

listaDatospersonales.sort((a,b)=>b.edad - a.edad);

console.log(listaDatospersonales)