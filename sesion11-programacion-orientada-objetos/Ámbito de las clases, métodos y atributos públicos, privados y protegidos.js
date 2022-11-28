class  Persona {
    //Private -> # para proteger las variables
    // Private -> sólo se puede acceder desde dentro de la clase
#nombre
#edad
#obtenEdad

//Protected -> _
//Protected -> sólo se puede acceder desde dentro de la clase y de clases descendientes
_isDeveloper = true
    constructor(nombre,edad){
        this.#nombre = nombre
        this.#edad = edad
        }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    } //metodos

    obtenNombre(){
        return this.#nombre
    }

   /* #obtenEdad(){
        return this.#edad
    }*/

}

const persona = new Persona("Joel", 28)
//console.log(persona)
//console.log(persona.nombre)
persona.saludo()
console.log(persona.obtenNombre())
console.log(persona._isDeveloper)
//console.log(persona.#obtenEdad())


