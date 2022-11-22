//Una función sin parámetros que devuelva siempre "true"

function sinParametro () {
    return true
}

console.log(sinParametro())

// Una función asíncrona que utilice un setTimeout y 
//pase por consola un "Hola soy una promesa" 
//5 segundos después de haberse ejecutado
function mensaje (){

    const miPromesa = new Promise((resolve,reject)=>{
    if(true){
        resolve()
    } else {
        reject()
    }
})

miPromesa
.then(()=> console.log("Hola soy una promesa"))
.catch(()=> console.log("Error")) }



setTimeout(mensaje,5000)

//Una función generadora de índices pares automáticos

function* npares (){
    
    let n = 0;
    while(true){
        n++
        if(n%2==0){
            return n;

        }else{
            n++
        }
        yield n;
    }

    
}
const nParesA = npares();
    
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);
    console.log(nParesA.next().value);




