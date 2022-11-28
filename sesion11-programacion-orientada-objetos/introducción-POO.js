const persona = {
    nombre:"Joel",
    edad:28,
    isDeveloper: true,
saludo: function(){
    console.log("Hola")},
}

//console.log(persona)

persona.saludo()

const otra_persona = {
    nombre:"Nicole",
    edad:28,
    isDevelepor:true,
    saludo: function(){
        console.log("Hola")
    },
}
otra_persona.saludo()
//funciones factory
const creaPersona = (nombre,edad,isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo:function(){
            console.log("Hola")
        }
    }
}

const nueva_persona = creaPersona("joel",28,true)

console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Nicole",28,true)

console.log(nueva_persona_2)
