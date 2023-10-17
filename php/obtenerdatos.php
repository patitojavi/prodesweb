<?php
include('conex.inc.php');

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtén la categoría desde la solicitud
$categoria = $_GET["categoria"];

// Realiza una consulta a la base de datos para obtener datos según la categoría
$select_query = "SELECT * FROM servicios WHERE tipo_servicio = '$categoria'";

$result = $conn->query($select_query);

if ($result->num_rows > 0) {
    // Almacena los datos en un arreglo
    $datos = array();
    while ($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }

    // Devuelve los datos en formato JSON
    echo json_encode($datos);
} else {
    echo "No se encontraron datos para la categoría: $categoria";
}

$conn->close();
?>