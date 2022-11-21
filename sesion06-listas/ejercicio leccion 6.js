//Lista de compra
let listaCompra = ["pastas","Arroz","Leche", "Carne", "Huevos"];

//Añadir "aceite de girasol"

listaCompra.splice(5,0,"Aceite de Girasol");
console.log(listaCompra);

//Eliminar aceite de girasol

listaCompra.splice(5,1);
console.log(listaCompra);

//objetos con 3 peliculas favoritas

const pelisFavoritas = [
    {titulo:"Toc Toc", director:" Vicente Villanueva ", Fecha:"2017 octubre 06" },
    {titulo:"Toy Story", director:" John Lasseter ", Fecha: "1996 enero 04" },
    {titulo:" Broly: The Legendary Super Saiyan ", director:"Shigeyasu Yamauchi", Fecha: "1993 marzo 06"},
     
]
//filtrar por fecha

const fechaLista = pelisFavoritas.filter (obj => obj.Fecha  > "2010 enero 01");

console.log(fechaLista)

//lista directores

const directoresLista = pelisFavoritas.map((d) => `${d.director}`);

console.log(directoresLista);

//lista titulos

const titulosLista = pelisFavoritas.map((t)=> `${t.titulo}`);

console.log(titulosLista);

//concatenar directores y titulos

const concatenarDirectoresytitulo = directoresLista.concat(titulosLista);

console.log(concatenarDirectoresytitulo);

//concatenar directores y titulos con factor de propagación
const propadirectoresytitulos = [...directoresLista,...titulosLista];

console.log(propadirectoresytitulos);

