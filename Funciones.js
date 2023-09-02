// Obtener todos los elementos de navegación
const enlacesNavegacion = document.querySelectorAll('.menu a');

// Obtener todas las secciones
const secciones = document.querySelectorAll('.seccion');

// Función para mostrar una sección y ocultar las demás
function mostrarSeccion(idSeccion) {
    secciones.forEach(seccion => {
        if (seccion.id === idSeccion) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
}

// Agregar un controlador de eventos clic a cada enlace de navegación
enlacesNavegacion.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar la navegación predeterminada
        const idSeccion = enlace.getAttribute('href').substring(1); // Obtener el ID de la sección
        mostrarSeccion(idSeccion); // Mostrar la sección correspondiente
    });
});

// Mostrar la sección "Home" por defecto
mostrarSeccion('home');
