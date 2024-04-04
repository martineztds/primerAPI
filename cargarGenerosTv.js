export const obtenerGenerosTv = async () => {
    const generos = document.querySelector('.generos');    
    try {
        const API = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=4b377b1819c0bff706888d09b568c460&language=es');
        const datos = await API.json();
        datos.genres.forEach(pelicula => {           
            const botonGenero = document.createElement('button');
            botonGenero.textContent = pelicula.name;
            generos.appendChild(botonGenero);
        });
    } catch (error) {
        console.log(error);
    }
}