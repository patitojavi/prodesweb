<?php
    $host = "db.inf.uct.cl";
    $usuario = "eescares";
    $contrasena = "20318620";
    $base_datos = "A2023_eescares";

    $conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);
    mysqli_set_charset($conexion, "utf8");
    if(mysqli_connect_errno()){
        echo "Error al conectar con la base de datos";
        exit();
    }
?>
