class Persona {
    nombre; //atributos
    edad;
    isDeveloper;
    constructor(nombre,edad,isDevelepor){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDevelepor

    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}`)
    } //metodos
}
//new crea un objeto, y cuando le pasamos una clase crea un objeto de tipo clase
const nueva_persona = new Persona("Joel",28,true)

console.log(nueva_persona)

nueva_persona.saludo()

let numero = 60 //inicializando una variable
console.log(typeof numero)

let persona_2 = new Persona("Maria",34,false)//se llama instanciar
console.log(typeof persona_2)

console.log(persona_2 instanceof Persona)

//instanceof -> similar a typeof pero para clases