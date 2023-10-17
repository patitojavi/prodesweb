<?php
    $host = "db.inf.uct.cl";
    $usuario = "pbenavides";
    $contrasena = "21207407";
    $base_datos = "A2023_pbenavides";

    $conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);
    mysqli_set_charset($conexion, "utf8");
    if(mysqli_connect_errno()){
        echo "Error al conectar con la base de datos";
        exit();
    }
?>
