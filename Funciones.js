// Obtener todos los elementos de navegación
const enlacesNavegacion = document.querySelectorAll('.menu a');

// Obtener todas las secciones
const secciones = document.querySelectorAll('.seccion');

// Función para mostrar una sección y ocultar las demás

function mostrarSeccion(seccion) {
    var secciones = document.getElementsByClassName('seccion');
    for (var i = 0; i < secciones.length; i++) {
      secciones[i].style.display = 'none';
    }
  
    if (seccion === 'contacto') {
      document.getElementById('contacto').style.display = 'block';
    } else {
      document.getElementById(seccion).style.display = 'block';
    }
  }

// Mostrar la sección "Home" por defecto al cargar la página
window.addEventListener('load', () => {
    mostrarSeccion('home');
});
