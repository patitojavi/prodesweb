<?php
// Conexión a la base de datos
include('conex.inc.php');

if ($conn->connect_error) {
    die("Error de conexiÃ³n a la base de datos: " . $conn->connect_error);
}

// Obtener la categoría desde la URL
$categoria = $_GET['categoria'];

// Consulta a la base de datos
$sql = "SELECT * FROM servicios WHERE categoria = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $categoria);
$stmt->execute();

$result = $stmt->get_result();

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($data);

$stmt->close();
$conn->close();
?>
