//Personaje random
const tituloPersonaje = document.querySelector('#title1')
const parrafoPersonaje = document.querySelector('#paragraph1')
const botonPersonaje = document.querySelector('#button1')
const contenedorPersonajes = document.querySelector('#characters1')
const idPersonaje = document.querySelector('#number')

botonPersonaje.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${idPersonaje.value}`)
    .then(res => res.json())
    .then(personaje => {
       console.log(personaje)
        tituloPersonaje.textContent = personaje.data.attributes.name;
        contenedorPersonajes.innerHTML = <h1>${personaje.data.attributes.alias}</h1>
        parrafoPersonaje.textContent = personaje.description
    });

}