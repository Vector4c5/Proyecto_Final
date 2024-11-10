// Función para mostrar el contenido correspondiente al botón
function mostrarContenido(seccionId) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.content-section');
    secciones.forEach(seccion => {
        seccion.classList.remove('active');
    });
    
    // Muestra la sección seleccionada
    const seccionActiva = document.getElementById(seccionId);
    if (seccionActiva) {
        seccionActiva.classList.add('active');
    }
}

// Muestra la sección "Inicio" por defecto al cargar la página
window.onload = function() {
    mostrarContenido('inicio');
};

