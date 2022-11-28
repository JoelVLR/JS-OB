//inheritance - herencia
class persona {
    _nombre
    _edad
    _sexo
    constructor(nombre,edad,sexo){
        this._nombre
        this._edad
        this._sexo
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
    }
    class Desarrollador extends persona {
    constructor(nombre,edad,sexo,lenguaje){
        super(nombre,edad)
        this.nombre =nombre
        this.edad=edad
        this.sexo=sexo
        this.lenguaje=lenguaje
    }
    saludo(){ //override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
    }
    
    const nuevodev = new Desarrollador("Joel",28, "m","javascript")
    console.log(nuevodev)
    nuevodev.saludo()
    
    //Polimorfismo => varias formas
    //las clases en javascript pueden tomar varias formas