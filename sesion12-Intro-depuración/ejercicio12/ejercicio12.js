/**Crea un nuevo fichero JS que contenga las siguientes líneas

- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función */
function fibonacci(num){
let fibo = []
for(let i = 0;i<=num;i++){
    
    if(i>=0 && i<=1){
        let x =0
        x+=i
        fibo.push(x)
    } else{
    
    let a=-1
    let b=-2
    a+=i
    b+=i
    let suma = fibo[b] + fibo[a]
    fibo.push(suma)}
       
      }
      return fibo
}



console.log(fibonacci(6))