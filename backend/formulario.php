<?php
// se llama a la conexion de la base de datos
include 'conex.inc';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Se define la consulta
    $sql = "INSERT INTO FormularioDatos (Nombre, Email, Mensaje) VALUES (?, ?, ?)";
    // Prepara la consulta
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sss", $nombre, $email, $mensaje);
        // Ejecuta la consulta
        if ($stmt->execute()) {
            echo "Los datos se han guardado correctamente en la base de datos.";
        } else {
            echo "Error al guardar los datos en la base de datos: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error al preparar la consulta: " . $conn->error;
    }
}
// Cierra la conexión para buenas practicas de programación y ahorrar recursos del servidor
$conn->close();
?>
