let marker;

function initMap() {
    const posicion1 = {
        lat:40.4165,
        lng:-3.70256
    }
    const pos2 = {
        lat:-33.45694,
        lng:-70.64827
    }

    const pos3 = {
        lat:60.472024,
        lng:8.46894
    }

    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:pos2
    })
   

    const marker1 = new google.maps.Marker({
        position: posicion1,
        map,
        title:"lugar favorito 1"
    })

    const marker2 = new google.maps.Marker({
        position: pos2,
        map,
        title:"lugar favorito 2"
    })
    const marker3 = new google.maps.Marker({
        position: pos3,
        map,
        title:"lugares favorito 3"
    })

    
    geoPosicion()

   

}


function geoPosicion () {
    if(navigator.geolocation){
    const geoLoc=navigator.geolocation
    const options = {timeout:5000}
    const watchPos = geoLoc.watchPosition(centraMapa,onError,options)}
    else{
        alert("tu navegador no admite geolocalización")
    }
    
    function centraMapa(position){
    const nuevaPos={
        lat:position.coords.latitude,
        lng:position.coords.longitude
        
    }


}

function onError(error){
    console.error(error)
}


}