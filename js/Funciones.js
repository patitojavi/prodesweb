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
      document.getElementById('mensaje-enviado').style.display = 'none'; // Ocultar el mensaje de éxito al mostrar "Contacto"
    } else {
      document.getElementById(seccion).style.display = 'block';
      document.getElementById('mensaje-enviado').style.display = 'none'; // Ocultar el mensaje de éxito al mostrar otras secciones
    }
}

// Mostrar la sección "Home" por defecto al cargar la página
window.addEventListener('load', () => {
    mostrarSeccion('home');
});

// Evento de escucha para el formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  mostrarSeccion('contacto'); // Mostrar la sección de "Contacto"
  document.getElementById('mensaje-enviado').style.display = 'block'; // Mostrar el mensaje de éxito

  // Restablecer el formulario después de mostrar el mensaje (opcional)
  document.getElementById('formulario-contacto').reset();
});
