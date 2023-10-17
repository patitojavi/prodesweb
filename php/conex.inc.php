<?php
$host = "db.inf.uct.cl";
$usuario = "pbenavides"; 
$contrasena = "21207407"; 
$base_de_datos = "A2023_pbenavides";

// Crear la conexión a la base de datos
$conn = new mysqli($host, $usuario, $contrasena, $base_de_datos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
