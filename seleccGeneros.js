const clicGeneros = document.querySelector('.generos');

clicGeneros.addEventListener('click', (e) => { // Agregamos un evento de clic a 'clicGeneros'
    // Verificamos si el clic se hizo en un botón (etiqueta 'BUTTON')
    if (e.target.tagName == 'BUTTON') {
        // Verificamos si el botón clicado ya tiene la clase 'btnGenero'
        if (e.target.classList.contains('btnGenero')) { // Si el botón clicado tiene la clase 'btnGenero'
            e.target.classList.remove('btnGenero'); // Quitamos la clase 'btnGenero' del botón clicado, deseleccionándolo
        } else { 
            // Quitamos la clase 'btnGenero' de cualquier otro botón que la tenga dentro de 'clicGeneros'
            clicGeneros.querySelector('.btnGenero')?.classList.remove('btnGenero');
            // Le agregamos la clase 'btnGenero' al botón clicado, lo seleccionamos
            e.target.classList.add('btnGenero');
        }
    }
});
