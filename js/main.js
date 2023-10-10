// Variables

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const holaMundo = document.getElementById('hola-mundo');
const miNombre = document.getElementById('mi-nombre');

//Toggle lista idiomas
idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle');
    console.log("click")
});

//Idiomas

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click', ()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        console.log(idioma)
    })
})