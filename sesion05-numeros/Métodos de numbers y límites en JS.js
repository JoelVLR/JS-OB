//Método de numebers y límite en js
//operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3)

console.log(a);
console.log(b);
console.log(a+b);

//muestra el valor de manera interna
console.log(b.valueOf());

let str=new String("Hola soy un String")
console.log(str);
console.log(str.valueOf())
//NaN(Not a Number) - Infinity
let n=Number(`adiós`);
console.log(n);
console.log(isNaN(n));
let numerador=19;
let divisor=0;
let divisor_2=null;
console.log(numerador/divisor_2);
//infinity cuando divides por cero
//Números hexadecimales(base16 existe la base 8 )
let numHex=`0x3a5b7`;

console.log(parseInt(numHex))

//cómo convertir los String a valores numéricos con Numbers,parseInt y parseFloat
let numero=`5.89`;
let num2=17.2;
console.log(typeof numero)
console.log(numero +  num2)//Error de concepto
console.log(Number(numero)+num2)

console.log(parseInt(numero));

console.log(parseFloat(numero))

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

//obtener los valores máximos y mínimo en javascript
let min_precision = Number.EPSILON;
let min_valor_js=Number.MIN_VALUE;
let max_valor_js=Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
console.log(2**1023)

//** significa elevado a */