export const obtenerSeries = async () => {
    const contenedor = document.querySelector('.contenedor-peliculas');
    try {
        const API = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=4b377b1819c0bff706888d09b568c460&language=es');
        const datos = await API.json();
        datos.results.forEach(serie => {
            const div = document.createElement('div');
            const p = document.createElement('p');            
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w200/${serie.poster_path}`
            p.textContent = serie.name;
            div.append(img,p);
            contenedor.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}