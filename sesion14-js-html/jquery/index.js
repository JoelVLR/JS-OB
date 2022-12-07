/**
 * funcionalidad de jquery
 * $(selector).acción()
 * $("h1").hide()--> ejemplo 1
 * $(document).ready(()=>{}) es lo mismo que esto $(()=>{})
 * con # hacemos referencia a las Id
 * si es una class se referencia con ".nombre clase"
 */

$(()=>{
    $(".hide-btn").click(()=>{
        //$("h1").hide() desaparece brusco
        $("h1").fadeOut() //desaparece suave

    })

    $(".show-btn").click(()=>{
        //$("h1").show() aparece brusco
        $("h1").fadeIn() //aparece suave
    })

    $("li").dblclick(()=>{
        $("h1").css({color:"red"})
    })

    $(".new-element").doubleclick(()=>{
        // $("ul").append("<li>New Element</li>") si quiero que el elemento este al final
        $("ul").prepend("<li>New Element</li>") // pone el elemento al principio
    })

$("li").mouseenter((elem)=>{
    //console.log ("Ha entrado el rator (hover)")
    elem.target.style.color = "blue" //cambiar de color cuando paso el rato
})

$("li").mouseleave(elem => {
elem.target.style.color = "black" //cambia de color cuando quito el rato del elemento
// en ambos casos solo dandole click se cambiaban
})


})
