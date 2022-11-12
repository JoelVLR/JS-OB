/* bucles For
for((inicializacion;condicion;actualizacion){
    // esto es el bucle
}*/

// i=i+1 => i+=1 => i++ es lo mismo pero abreviado
for (let i = 0;i<10;i=i+1){
console.log(i)
}

let lista =[1,4,6,2,3,7,10,12,800];
for (let i=0; i<lista.length;i++){
    console.log(lista[i]*2)
};

//Estructura for of

for(let valor of lista){
    console.log(valor)
};

//Estructura ForEach

lista.forEach(valor=>{
    console.log(valor)
});

let persona = {
    nombre: "joel",
    apellido:"Lopez",
    edad: 34,
    IsDeveloper: true
}
console.log(persona.nombre);

let prop= "edad";
console.log(persona[prop]);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}