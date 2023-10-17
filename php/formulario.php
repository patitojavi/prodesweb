<?php
include('conex.inc.php');

if ($conn->connect_error) {
    die("Error de conexiÃ³n a la base de datos: " . $conn->connect_error);
}

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];

$insert_query = "INSERT INTO contactos (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

if ($conn->query($insert_query) === TRUE) {
    echo "<script>alert('Los datos se han guardado correctamente.'); window.location = '/~pbenavides/DesWeb/Proyecto/entrega2/contacto.html';</script>";
} else {
    echo "Error: " . $insert_query . "<br>" . $conn->error;
}

$conn->close();
?>
