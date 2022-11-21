// trabajando con fechas

const fecha = new Date()

console.log(fecha);
// Atención - los mese inicializan en 0 (0-enero y 11 - diciembre)
const fecha2 = new Date(1994,2,16,7,15,00);

console.log(fecha2);

//Milisegundos

const fecha3=new Date(100000000)

console.log(fecha3);

const fecha4= new Date("october 13, 1979,12:15:15")

console.log(fecha4)

console.log(fecha<fecha2)

const fecha5 = new Date(1994,2,16,7,15,00)

console.log(fecha2===fecha5)//error- no se pueden comprar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime())

//obtener el día . getDate()

console.log(fecha2.getDate())

//obtener el mes .getMonth()

console.log(fecha2.getMonth()+1);

//obtener el año .getFullYear()

console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocalDateString

console.log(fecha2.toLocaleDateString("en-US"));
