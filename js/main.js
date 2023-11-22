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
});

//Idiomas

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click', ()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    })
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `img/${idioma}.png`;
    switch (idioma) {
        case 'english':
            holaMundo.innerHTML = '<span id="negritas">¡HELLO</span> WORLD!';
            miNombre.textContent = 'My names is Jorge Cruz';
            break;
        case 'portuguese':
            holaMundo.textContent = 'Olá Mundo';
            miNombre.textContent = 'Meu nome é Jorge Cruz';
            break;
        default:
            break;
    }
}