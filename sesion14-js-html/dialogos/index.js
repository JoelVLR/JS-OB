const boton=document.querySelector("#btn")

//console.log(boton)

boton.addEventListener("click", ()=> {
    //alert("Se ha hecho click")
    //confirm ("¿Estás de acuerdo?") && console.log("Ok")
    /*confirm("Estas de acuerdo")
    ? console.log("ok")
    : console.log("No!!")*/

    const respuesta = confirm("seguro?")
    if(respuesta){
        console.log("Estás de acuerdo")
    }else{
        console.log("No estas acuerdo")
    }
})

const botonInfo=document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tú nombre?")
if(nombre) {
    console.log("Tu nombre es " + nombre)
} else {
    console.log("No has introducido nada")
}
})

const lista = [{
    nombre:"Joel",
    edad:28
},{ nombre:"nicole",
edad:28
},
{
    nombre:"Lía",
    edad:28
}
]

console.table(lista)//una manera mas efciente para mostar listas

