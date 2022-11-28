class Estudiante {
    #nombre;
    #asignaturas=[];
     constructor(nombre,asignaturas){
        this.#nombre=nombre 
        this.#asignaturas=asignaturas
    

    }
  

 obtenDatos(){
     return {nombre:this.#nombre,
     asignaturas:this.#asignaturas}
   
    } 
        
 }



const estudiante = new Estudiante("Joel","Javascript, HTML, CSS")
console.log(estudiante.obtenDatos())