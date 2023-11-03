var xhr = new XMLHttpRequest();
xhr.open('GET', 'servicio.php?categoria=notebook', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        // Procesa y muestra los datos en el espacio "content" en tu página
        // Puedes recorrer el array "data" para mostrar la información en la página.
    } else {
        console.error('Error al obtener datos');
    }
};

xhr.send();