//.some()
const array = [3,7,2,4,,7,9,42,35,7865,23,-1];

const res = array.some(valor => valor <0);

console.log(res);

const existe = array.some(valor=> valor ===90);

console.log(existe);

const listaObjetos = [
    {nombre:"leire", edad:35},
    {nombre:"lulu", edad:34},
    {nombre:"lele", edad:28},
    {nombre: "pepe", edad:3},
    {nombre:"joel", edad:28},
]

    const existeJoel = listaObjetos.some(persona => persona.nombre === "joel")

    console.log (existeJoel);

    //cómo obtener una lista a partir de un objeto iterable

    const str = "Hola soy joel";

    console.log(str[5])

    const ar_str = Array.from(str);

    console.log (ar_str);

    const set = new Set ([2,3,"Hola", 4]);

    const ar_set =Array.from(set);

    console.log(ar_set);

    const keys = array.keys();

    console.log(keys)

    const ar_key = Array.from(keys);

    console.log(ar_key);