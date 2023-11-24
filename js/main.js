// Variables

const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');
const seleccionado = document.getElementsByClassName('seleccionado');

// Info
const holaMundo = document.getElementById('hola-mundo');
const miNombre = document.getElementById('mi-nombre');
const yoSoy = document.getElementById('yo-soy');
const misProyectos = document.getElementById('mis-proyectos');
const sobreMi = document.getElementById('sobre-mi');

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
            miNombre.innerHTML = 'My name is <span id="negritas">Jorge Cruz</span>';
            yoSoy.innerHTML = 'and I&#x27m <span id="negritas">Front-End Developer</span>';
            misProyectos.textContent = 'My Proyects';
            sobreMi.textContent = 'About Me';
            break;
        case 'portuguese':
            holaMundo.innerHTML = '<span id="negritas">¡OLÁ</span> MUNDO!';
            miNombre.innerHTML = 'Meu nome é <span id="negritas">Jorge Cruz</span>';
            yoSoy.innerHTML = 'e sou <span id="negritas">Desenvolvedor Front-End</span>';
            misProyectos.textContent = 'Meus Projetos';
            sobreMi.textContent = 'Sobre mim';
            break;
        case 'español':
            holaMundo.innerHTML = '<span id="negritas">¡HOLA</span> MUNDO!';
            miNombre.innerHTML = 'Mi nombre es<span id="negritas">Jorge Cruz</span>';
            yoSoy.innerHTML = 'y soy <span id="negritas">Desarrollador Front-End</span>';
            misProyectos.textContent = 'Mis Proyectos';
            sobreMi.textContent = 'Sobre mi';
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    console.log(navigator.language);
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;
        case 'es-ES':
            establecerIdioma('español')
            break;
        default:
            break;
    }
});