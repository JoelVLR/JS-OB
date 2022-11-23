// En el archivo index.js crea una función que devuelva 
// un error con un mensaje personalizado

const funcionEjercicio = v => {
    if (typeof v === "number"){
        return prueba2  + " es el tipo de dato correcto ";
    }
    throw new Error( prueba2 + " no es el tipo de dato correcto ")
}


//Registra el error en un archivo a través de un try...catch

const prueba2 = "hola";
try {
    console.log(funcionEjercicio(prueba2))
    const ejercicio = funcionEjercicio(prueba2)
    
} catch(e) {
    console.error(`${e}`)}