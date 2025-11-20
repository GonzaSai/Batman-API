//Personaje random
const tituloPersonaje = document.querySelector('#title1')
const botonPersonaje = document.querySelector('#button1')
const contenedorPersonajes = document.querySelector('#characters1')
const numeroPersonaje = document.querySelector('#number')
const textoPersonaje = document.querySelector('#text')

botonPersonaje.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${numeroPersonaje.value}`)
    .then(res => res.json())
    .then(personaje => {
       console.log(personaje)
       if(personaje.data.attributes.role == "Hero"){
        tituloPersonaje.textContent = personaje.data.attributes.name;
        tituloPersonaje.style.color = "blue";
        contenedorPersonajes.innerHTML = `<h1 class="paragraph">${personaje.data.attributes.alias}</h1>   
        <ul>
        <li class="paragraph">Alive: ${personaje.data.attributes.alive}</li>
        <li class="paragraph">Role: ${personaje.data.attributes.role}</li>
        <li class="paragraph">Description: ${personaje.data.attributes.description}</li>
        <li class="paragraph">Creator: ${personaje.data.attributes.creator}</li>
        <li class="paragraph">First appearance: ${personaje.data.attributes.first_appearance}</li>
        <li class="paragraph">Abilities: ${personaje.data.attributes.abilities}</li>
        </ul> `
        let parrafoPersonaje = document.querySelectorAll('.paragraph') 
        parrafoPersonaje.forEach(p => {
        p.style.color = "blue";
    });
       }
        else if(personaje.data.attributes.role === "Villain"||personaje.data.attributes.role === "Anti-Hero"||personaje.data.attributes.role === "Anti-Hero/Villain") {
            tituloPersonaje.textContent = personaje.data.attributes.name;
        tituloPersonaje.style.color = "red";
        contenedorPersonajes.innerHTML = `<h1 class="paragraph">${personaje.data.attributes.alias}</h1> 
          <ul> 
           <li class="paragraph">Alive: ${personaje.data.attributes.alive}</li>
            <li class="paragraph">Role: ${personaje.data.attributes.role}</li>
            <li class="paragraph">Description: ${personaje.data.attributes.description}</li>
            <li class="paragraph">Creator: ${personaje.data.attributes.creator}</li>
            <li class="paragraph">First appearance: ${personaje.data.attributes.first_appearance}</li>
            <li class="paragraph">Abilities: ${personaje.data.attributes.abilities}</li>
          </ul>`
        let parrafoPersonaje = document.querySelectorAll('.paragraph') 
        parrafoPersonaje.forEach(p => {
        p.style.color = "red";
    });
        }else{
                 tituloPersonaje.textContent = personaje.data.attributes.name;
        tituloPersonaje.style.color = "gray";
        contenedorPersonajes.innerHTML = `<h1 class="paragraph">${personaje.data.attributes.alias}</h1>
        <ul>   
        <li class="paragraph">Alive: ${personaje.data.attributes.alive}</li>
        <li class="paragraph">Role: ${personaje.data.attributes.role}</li>
        <li class="paragraph">Description: ${personaje.data.attributes.description}</li>
        <li class="paragraph">Creator: ${personaje.data.attributes.creator}</li>
        <li class="paragraph">First appearance: ${personaje.data.attributes.first_appearance}</li>
        <li class="paragraph">Abilities: ${personaje.data.attributes.abilities}</li>
        </ul>`
        let parrafoPersonaje = document.querySelectorAll('.paragraph') 
        parrafoPersonaje.forEach(p => {
        p.style.color = "gray";
    });
         }
     
    });

}
