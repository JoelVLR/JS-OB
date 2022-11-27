// instalar axios para hacer llamdas a servicios externos

//pokeapi

const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(function (response) {
    // handle success
    console.log("success");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!")
    console.log(error);
  })
 
  //me manda errores de fuente al intentar ver la data
