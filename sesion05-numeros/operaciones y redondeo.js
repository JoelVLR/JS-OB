//operaciones y redondeo
let a=3.5;
let b=4.8;

//suma
console.log(a+b)
//resta
console.log(a-b)
//multiplicación
console.log(a*b)
//division
console.log(a/b)


// Representación de los números en cadenas de texto
console.log(typeof a)
let a_s=a.toString()
console.log(a_s)
console.log(typeof a_s)

// Redondeo de números decimales
let c = 3.3;
let d=c*3;
console.log(d);
//.toFixed convierte al valor numerbs a String
console.log(d.toFixed());

let e = 1839.1232333445
let f = 23423423534;

console.log(e.toFixed(2))
console.log(f.toFixed(2))

//.toPrecision(x)-limita el número de cifras significativas, tambien manda un String
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));
console.log(typeof f.toPrecision())