//funciones asincronas y promesas

//funciones asincronas

function miAsinc(){
    //hace una llamada a una base de datos externa
    //puede darnos algún error
    
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //si esta todo corercto
    if(i!==1){
        resolve()
    } else {
        reject()
    }
})

//funciones que puede o no ejecutarse

miPromesa
   .then(()=> console.log("Se ha ejecutado de forma correcta"))
   .catch(()=> console.log("Error"))
   .finally(()=> console.log("Yo me ejecuto siempre"))
