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

//Crear personaje
const contenedorCrear = document.querySelector('#characters2')

const nombre = document.querySelector('#name')
const alias = document.querySelector('#alias')
const vivo = document.querySelector('#alive')
const rol = document.querySelector('#role')
const descripcion = document.querySelector('#description')
const creador = document.querySelector('#creator')
const aparicion = document.querySelector('#fAppearances')
const habilidades = document.querySelector('#abilities')

const botonNombre = document.querySelector('#bName')
const botonAlias = document.querySelector('#bAlias')
const botonVivo = document.querySelector('#bAlive')
const botonRol = document.querySelector('#bRole')
const botonDescripcion = document.querySelector('#bDescription')
const botonCreador = document.querySelector('#bCreator')
const botonAparicion = document.querySelector('#bFAppearances')
const botonHabilidades = document.querySelector('#bAbilities')

botonNombre.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${nombre.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `<h1 style="color:blue;">${crear.data.attributes.name}</h1>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `<h1 style="color:red;">${crear.data.attributes.name}</h1>`
        }else{
            contenedorCrear.innerHTML = `<h1 style="color:gray;">${crear.data.attributes.name}</h1>`
        }
    });
}

botonAlias.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${alias.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.alias}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.alias}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.alias}</li>
            </ul>`
        }
    });
}

botonVivo.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${vivo.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.alive}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.alive}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.alive}</li>
            </ul>`
        }
    });
}

botonRol.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${rol.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.role}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.role}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.role}</li>
            </ul>`
        }
    });
}

botonDescripcion.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${descripcion.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.description}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.description}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.description}</li>
            </ul>`
        }
    });
}

botonCreador.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${creador.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.creator}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.creator}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.creator}</li>
            </ul>`
        }
    });
}

botonAparicion.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${aparicion.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.first_appearance}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.first_appearance}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.first_appearance}</li>
            </ul>`
        }
    });
}

botonHabilidades.onclick = function () {
    fetch(`https://api.batmanapi.com/v1/characters/${habilidades.value}`)
    .then(res => res.json())
    .then(crear => {
        console.log(crear)
        if(crear.data.attributes.role == "Hero"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:blue;">${crear.data.attributes.abilities}</li>
            </ul>`

        }else if(crear.data.attributes.role === "Villain"||crear.data.attributes.role === "Anti-Hero"||crear.data.attributes.role === "Anti-Hero/Villain"){
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:red;">${crear.data.attributes.abilities}</li>
            </ul>`
        }else{
            contenedorCrear.innerHTML = `${contenedorCrear.innerHTML}
            <ul>
            <li style="color:gray;">${crear.data.attributes.abilities}</li>
            </ul>`
        }
    });
}


