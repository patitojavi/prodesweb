<?php
    include("conexion.php");
?>


document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón "Enviar" por su id
    const enviarButton = document.getElementById('enviarButton');

    // Agregar un evento de clic al botón si existe
    if (enviarButton) {
        enviarButton.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado del formulario (evitar que se envíe)
            event.preventDefault();

            // Mostrar una alerta en pantalla
            alert('Mensaje enviado correctamente');
            
            // Puedes agregar aquí el código para enviar el formulario al servidor si es necesario
        });
    }
    
    // Obtener todos los elementos de navegación
    const enlacesNavegacion = document.querySelectorAll('.menu a');

    // Obtener todas las secciones
    const secciones = document.querySelectorAll('.seccion');

    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(seccion) {
        // Ocultar todas las secciones
        secciones.forEach(function(seccion) {
            seccion.style.display = 'none';
        });

        // Mostrar la sección deseada
        document.getElementById(seccion).style.display = 'block';
    }

    // Agregar un evento de clic a cada enlace de navegación
    enlacesNavegacion.forEach(function(enlace) {
        enlace.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            // Obtener el valor del atributo "data-seccion" del enlace para identificar la sección
            const seccion = enlace.getAttribute('data-seccion');

            // Llamar a la función para mostrar la sección
            mostrarSeccion(seccion);
        });
    });

    // Mostrar la sección "Home" por defecto al cargar la página
    mostrarSeccion('home');
});

