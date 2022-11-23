//altura en cm
let alturacm=166;

//altura en Metros
let alturaM=1.66;
//peso en Kg
let pesoKg=57.234;
//Redondeo de la altura hacia arriba
let alturaR=alturaM.toPrecision(2) ;
console.log(alturaR);
//redondeo el peso en kg hacia abajo
let pesoKgR=pesoKg.toPrecision(2);
console.log(pesoKgR)

let max1 = Number.MAX_VALUE + 1;
let max2=Number.MAX_VALUE;
let comparacion="el máximo valor que se puede obtener en javascript + 1 es " +  max1 + " es igual maximo valor que puede obtener en javascript es " + max2;
 console.log(comparacion)