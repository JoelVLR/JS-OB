class  Persona {
    //Private -> # para proteger las variables
    // Private -> sólo se puede acceder desde dentro de la clase
#nombre
#edad


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
        // función getter -> nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }

getEdad(){
    return this.#edad
} 

setEdad(nuevaedad){
    this.#edad = nuevaedad
    
}

}

const persona = new Persona("Joel", 28)

const edad = persona.getEdad()
console.log(edad)


//Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
//Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos

//Quiero cambiar la edad de la persona
persona.setEdad(34)

console.log(persona.getEdad())
