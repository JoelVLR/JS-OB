//cómo trabajar con listas (arrays, arreglos, vectores)
let var1=45;
let array =[1,"hola",false,{id:5}, null, undefined,var1]
// puede tener todo tipo de valores
console.log(array);

//acceder a los valores de un array a através de su posición
//array[indice]=>0,1,2,3,4,5,6...
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

//M´wtodos para introducir nuevos valores a nuestros arrays
//.push() .unshift() => mutan el valor de nuestro array
//valores al final -> push
array.push("final",34,true,"hijole");
console.log(array);

//valores al principio -> Unshift()
array.unshift("inicio",12,"interesante", false);
console.log(array)

//métodos para eliminar valores en nuestros arrays
// .pop() .shift() = > mutan el valor del array
//valores al final -> pop
const array2 = [1,3,"hola",false];
array2.pop()
console.log(array2)

//valores al inicio ->shift
array2.shift();
console.log(array2);

//métpdp para elminar ,modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [1,2,3,4,5,6];
array3.splice(2,0);//(comenzar desde esta posición,indicar loa cantidad de valores a eliminar)
console.log(array3)

//añadir valores . splice(indice,0,Valores para agregar)
array3.splice(2,0,"hola")
console.log(array3);

//modificar valores .splice(indice,1,valores)
array3.splice(3,1,"chao");
console.log(array3);
