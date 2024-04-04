import { obtenerPeliculas } from "./cargarPeliculas.js";
import { obtenerSeries } from "./cargarSeries.js";
import { obtenerGenerosP } from "./cargarGenerosP.js";
import { obtenerGenerosTv } from "./cargarGenerosTv.js";
import "./seleccGeneros.js";

const btnCargarPeliculas = document.querySelector('.cargaPeliculas');
const btnCargarSeries = document.querySelector('.cargaSeries');

obtenerPeliculas();
obtenerGenerosP();

function limpiarContenedor() {
    const contenedorPeliculas = document.querySelector('.contenedor-peliculas');
    contenedorPeliculas.innerHTML = '';
}

function limpiarContenedorGeneros() {
    const contenedorGeneros = document.querySelector('.generos');
    contenedorGeneros.innerHTML = '';
}

btnCargarPeliculas.addEventListener('click', () => {
    document.querySelector('.tt').innerText = 'Peliculas The Movie DB';
    limpiarContenedor();
    limpiarContenedorGeneros();
    obtenerPeliculas();
    obtenerGenerosP();    
});

btnCargarSeries.addEventListener('click', () => {
    document.querySelector('.tt').innerText = 'Series The Movie DB';
    limpiarContenedor();
    limpiarContenedorGeneros();
    obtenerSeries();
    obtenerGenerosTv();
});