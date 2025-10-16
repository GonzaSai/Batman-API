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
       const imagen = personaje.data.attributes.image_url
        tituloPersonaje.textContent = personaje.data.attributes.name;
        contenedorPersonajes.innerHTML = `<h1>${personaje.data.attributes.alias}</h1>   
        <p>Alive: ${personaje.data.attributes.alive}</p>
        <p>Role: ${personaje.data.attributes.role}</p>
        <p>Description: ${personaje.data.attributes.description}</p>
        <p>Creator: ${personaje.data.attributes.creator}</p>
        <p>First appearance: ${personaje.data.attributes.first_appearance}</p>
        <p>Abilities: ${personaje.data.attributes.abilities}</p>
        <img src="${imagen}" alt="">`
     
    });

}