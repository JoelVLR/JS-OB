const mensaje = document.querySelector("#btn")



mensaje.addEventListener("click",() => {
    alert("Click en el Botón")
})

$(()=>{
    $("#btn").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})