let Nombre="Joel"
let Apellido="López"
let estudiante = `       ${Nombre} ${Apellido}`
console.log(estudiante)
let estudianteMayus = console.log(`${Nombre.toUpperCase()} ${Apellido.toUpperCase()}`)
let estudianteMinus = console.log(`${Nombre.toLowerCase()} ${Apellido.toLowerCase()}`)
let totalletraestudiante = console.log(`${Nombre} ${Apellido}`.length)
let primeraletraNombre = console.log(Nombre.charAt(0))
let ultimaltraapellido = console.log(Apellido.charAt(4))
//una cadena de texto que elimine los espacios de la variable estudiante
let estudiantesinespacio = estudiante.trim();
console.log(estudiante.length)
console.log(estudiantesinespacio.length)
 //una variable booleana que diga si el nombre esta contenido en la variable estudiante
let estudianteboolean=estudiante;
console.log(estudiante.includes(`Joel`,`Lopez`));