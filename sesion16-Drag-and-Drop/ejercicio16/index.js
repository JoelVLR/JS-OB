const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papeleras = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Estoy arrastrando el párrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        
    })

    parrafo.addEventListener("dragend", () => {
        console.log("párrafo " + parrafo.innerText + " fue eliminado")
        parrafo.classList.remove("dragging")
    })

    
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event =>{
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy" //copy por defecto
    //console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        console.log("Drop")
    })
   
})

papeleras.forEach(papelera =>{
    papelera.addEventListener("dragover",event=>{
        event.preventDefault()
        event.dataTransfer.dropEffect="move"
    })

    papelera.addEventListener("drop",event=>{
        const id_p = event.dataTransfer.getData("id")
        document.getElementById(id_p).remove()
        
        
    })
    
})
  
 

