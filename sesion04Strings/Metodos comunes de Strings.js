//Metodos mas utilizados con cadenas de caracteres
//como obtener la longitud de un string
let str="Hola soy un String";
console.log(str.length);

//obtener partes de cadenas de caracteres
//Slice() Substring() substr()
let slice_str=str.slice(0,10);
console.log(slice_str);

let substring_str=str.substring(5,10);
console.log(substring_str);

let substr_str = str.substr(5,10);
console.log(substr_str);

//Reemplazar parte del contenido de una cadena de texto
let cadena ="Hola mi nombre es joel";
console.log(cadena)
// al utilizar string sólo reeemplaza la primera instancia
console.log(cadena.replace(`joel`,`Miguel`));

let texto_largo = 
"Tito no es un mono cualquiera. a tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nuece que se caen de los árboles"

console.log(texto_largo.replace(`los`, `cinco`));

//al utilizar la expresion regular /g (global), reeemplaza todas las instancias

console.log(texto_largo.replace(/los/g, `cinco`));