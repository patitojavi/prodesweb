// Obtener todos los elementos de navegación
const enlacesNavegacion = document.querySelectorAll('.menu a');

// Obtener todas las secciones
const secciones = document.querySelectorAll('.seccion');


// Mostrar la sección "Home" por defecto al cargar la página
window.addEventListener('load', () => {
    mostrarSeccion('home');
});

function irACategoria(categoria) {
    // Aquí puedes redirigir al usuario a la página correspondiente a la categoría
    // Por ejemplo, puedes usar window.location.href = 'ruta-de-la-pagina.html';
    // Reemplaza 'ruta-de-la-pagina.html' por la URL de la página de la categoría.
  
    // Ejemplo de redirección ficticia (reemplaza esto con tu lógica real):
    if (categoria === 'pc') {
        window.location.href = 'mantencion-pc.html';
    } else if (categoria === 'notebook') {
        window.location.href = 'mantencion-notebook.html';
    }
}

function animacionMouseOver(elemento) {
    elemento.style.transform = 'scale(1.1)'; // Aplicar escala al pasar el mouse sobre el elemento
}

function animacionMouseOut(elemento) {
    elemento.style.transform = 'scale(1)'; // Restaurar la escala original al salir del elemento con el mouse
}

// Obtener el botón "Enviar" por su id
const enviarButton = document.getElementById('enviarButton');

// Agregar un evento de clic al botón
enviarButton.addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del formulario (evitar que se envíe)
    event.preventDefault();

    // Mostrar una alerta en pantalla
    alert('Mensaje enviado correctamente');
    
    // Puedes agregar aquí el código para enviar el formulario al servidor si es necesario
});
