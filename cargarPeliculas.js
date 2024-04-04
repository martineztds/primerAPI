export const obtenerPeliculas = async () => {
    const contenedor = document.querySelector('.contenedor-peliculas');
    try {
        const API = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4b377b1819c0bff706888d09b568c460&language=es');
        const datos = await API.json();
        datos.results.forEach(pelicula => {
            const div = document.createElement('div');
            const p = document.createElement('p');            
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`
            p.textContent = pelicula.title;
            div.append(img,p);
            contenedor.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}