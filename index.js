//Personaje random
const tituloPersonaje = document.querySelector('#title1')
const parrafoPersonaje = document.querySelector('#paragraph1')
const botonPersonaje = document.querySelector('#button1')
const personajes = document.querySelector('#characters')

botonPersonaje.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters`)
    .then(res => res.json())
    .then(imagenPersonaje => {
        tituloPersonaje.textContent = imagenPersonaje.name
    });

}