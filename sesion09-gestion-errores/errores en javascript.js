const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false
    throw new Error("El valor debe ser tipo número")
}

//console.log(miFuncion("ala"))

//const elDoble = miFuncion("ala")
const numero = "8";
try {
    //código que puede fallar

    console.log("Está ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble);
} catch(e) {
    console.error("Error")
    console.error(`El vaor de e es : ${e}`)
    // en caso de fallar ,quiero que ejecutes
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como sino existe ninguno");
}

//errores mas comunes
//InternalError: cada vez que hay problema interno (ejercicio de recursividad)
//SyntaxError : esta mal escrito alguna palabra del codigo
//TypeError: error de tipe de dato que le entregamos a una función que espera otro tipo de dato (string a number)
//RangeError: error de rango (cuando tengo 10 elemento y quiero acceder al elemento 12)
// ReferenceError: no existe referencia a la que hacemos referencia.



