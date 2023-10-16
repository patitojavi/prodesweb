<?php
// se llama a la conexion de la base de datos
include '/backend/conex.inc';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Mantención de PC y servicios relacionados">
    <title>Mantención de PC</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <script src="js/Funciones.js"></script>
    <nav class="navegacion">
        <ul class="menu">
            <li class="logo"><a href="home.html"><img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/becrux.png" alt="Logo de la empresa"></a></li>
            <li><a href="home.html" onclick="mostrarSeccion('home')">Home</a></li>
            <li><a href="#productos-servicios" onclick="mostrarSeccion('productos-servicios')">Productos y Servicios</a></li>
            <li><a href="#quienes-somos" onclick="mostrarSeccion('quienes-somos')">Quienes Somos</a>
                <ul class="submenu">
                    <li><a href="#historia" onclick="mostrarSeccion('historia')">Historia</a></li>
                    <li><a href="#nuestro-equipo" onclick="mostrarSeccion('nuestro-equipo')">Nuestro Equipo</a></li>
                </ul>
            </li>
            <li><a href="#contacto" onclick="mostrarSeccion('contacto')">Contacto</a></li>
        </ul>
    </nav>


    <section id="home" class="seccion">
        <div class="rectangulohome">
            <div class="contenidohome">
                <h1>Servicio Técnico para PC</h1>
                <p>
                    ¿Tu PC tiene problemas de rendimiento y no sabes qué puede ser la causa del problema?
                    <br><br>
                    
                    Este es el sitio perfecto, ya que en BECRUX nos encargamos de revisar y hacerle una mantención completa a tu PC.
                    <br><br>
                    De esta manera alargarás la vida útil y siempre podrás usarlo al máximo rendimiento.
                </p>
                <button>Cotiza con nosotros</button>
            </div>
            <div class="imagenhome">
                <img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/pc1.png alt="imagen de un pc">
            </div>
        </div>    
    </section>


    <section id="productos-servicios" class="seccion">
        <h1>Productos y Servicios</h1>
        <table>
            <tr>
                <!-- Categoría 1: Mantención de PC -->
                <td class="categoria" onclick="irACategoria('pc')" onmouseover="animacionMouseOver(this)" onmouseout="animacionMouseOut(this)">
                    <img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/pcEscritorio.png" alt="Mantención de PC">
                    <p>Mantención de PC</p>
                </td>
                <!-- Categoría 2: Mantención de Notebook -->
                <td class="categoria" onclick="irACategoria('notebook')" onmouseover="animacionMouseOver(this)" onmouseout="animacionMouseOut(this)">
                    <img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/notebook.png" alt="Mantención de Notebook">
                    <p>Mantención de Notebook</p>
                </td>
            </tr>
        </table>
    </section>


    <section id="quienes-somos" class="seccion">
        <h1>Quiénes Somos</h1>
        <p>Somos una empresa dedicada a ofrecer soluciones especializadas en la reparación y mantenimiento de computadoras personales (PC) y notebooks. Con más de una década de experiencia en el sector, nos enorgullece ser líderes en brindar servicios de alta calidad para resolver los problemas tecnológicos de nuestros clientes.</p>
        
        <h2>Misión</h2>
        <p>Nuestra misión es proporcionar a nuestros clientes soluciones tecnológicas confiables y eficientes que maximicen el rendimiento de sus dispositivos, permitiéndoles aprovechar al máximo su inversión en tecnología.</p>
        
        <h2>Visión</h2>
        <p>Nuestra visión es ser reconocidos como un referente en el mercado de reparación de PC y notebooks, ofreciendo un servicio excepcional y siendo líderes en innovación tecnológica en nuestro sector.</p>
        
        <h2>Valores</h2>
        <ul>
            <li>Excelencia: Nos esforzamos por ofrecer servicios de la más alta calidad.</li>
            <li>Confianza: Construimos relaciones sólidas y basadas en la confianza con nuestros clientes.</li>
            <li>Innovación: Buscamos constantemente nuevas soluciones y tecnologías para mejorar nuestros servicios.</li>
            <li>Compromiso: Estamos comprometidos con la satisfacción total de nuestros clientes.</li>
        </ul>
    </section>


    <section id="historia" class="seccion">
        <h1>Historia</h1>
        <h2>Nuestros Inicios</h2>
        <p>Nuestra historia comienza en el corazón de la tecnología, en una pequeña sala de estar donde un grupo de entusiastas de la informática se reunía para compartir su pasión por la tecnología. Este grupo de amigos compartía un objetivo común: brindar soluciones a los problemas informáticos que afectaban a las personas en su vida diaria.</p>
        
        <h2>Los Desafíos Iniciales</h2>
        <p>En nuestros primeros días, enfrentamos numerosos desafíos. Con recursos limitados y un espacio de trabajo modesto, nos sumergimos en el mundo de la informática. Aprendimos de cada problema que enfrentamos y cada solución que proporcionamos. Nuestra dedicación y compromiso con la calidad nos ayudaron a ganar la confianza de nuestros primeros clientes.</p>
        
        <h2>Crecimiento y Evolución</h2>
        <p>A medida que crecíamos, expandimos nuestros servicios para abordar una variedad de necesidades tecnológicas, desde la reparación de hardware hasta la eliminación de malware y la optimización del rendimiento. Nuestro equipo de técnicos altamente calificados se mantuvo a la vanguardia de las últimas tendencias tecnológicas y se esforzó por ofrecer soluciones efectivas y rápidas a nuestros clientes.</p>
        
        <h2>Nuestra Visión Actual</h2>
        <p>Hoy en día, hemos crecido en una empresa de renombre en el campo de la reparación de PC y notebooks. Nuestra dedicación a la satisfacción del cliente y nuestro compromiso con la calidad siguen siendo la base de nuestro éxito. Nos enorgullece brindar servicios confiables y asequibles a individuos y empresas por igual.</p>
        
        <p>En cada paso de nuestro viaje, hemos mantenido nuestra pasión por la tecnología y nuestro deseo de ayudar a las personas a superar los desafíos informáticos. Esperamos continuar sirviendo a nuestra comunidad y ser su socio de confianza en todo lo relacionado con la tecnología.</p>
        
        <p>Gracias por ser parte de nuestra historia y confiar en nosotros para mantener sus dispositivos en funcionamiento de manera óptima. ¡Esperamos con interés lo que depara el futuro para nuestra empresa y nuestros clientes!</p>
    </section>


    <section id="nuestro-equipo" class="seccion">
        <h1>NUESTRO EQUIPO</h1>
        <div class="equipo-container">
            <div class="equipo-member">
                <a href="https://github.com/eduardoscrs" target="_blank">
                    <img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/eduardoscrs.png" alt="Eduardo Escares en Github">
                    <p>EDUARDO ESCARES</p>
                </a>
            </div>
            <div class="equipo-member">
                <a href="https://github.com/patitojavi" target="_blank">
                    <img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/patitoajvi.png" alt="Patricio Benavides en Github">
                    <p>PATRICIO BENAVIDES</p>
                </a>
            </div>
        </div>
        <div class="github-repo">
            <a href="https://github.com/patitojavi/prodesweb" target="_blank">
                <img src="https://pillan.inf.uct.cl/~eescares/DesWeb/Proyecto/Entrega1/prodesweb/img/GitHub-Logo.png" alt="GitHub Logo">
                <p>VISITA NUESTRO REPOSITORIO EN GITHUB</p>
            </a>
        </div>
    </section>


    <section id="contacto" class="seccion">
        <div class="contacto-container">
            <div class="contacto-info">
                <br>
                <br>
                <h1>Contactanos</h1>
                <div>
                    <h2>Horario de Atención</h2>
                    <p>Lunes A Sabado de: <br>9:00 Hrs hasta las 17:00 Hrs</p>
                    <h2>Ubicación</h2>
                    <p>Dirección: Rudecindo Ortega 2968-3308, Temuco, Araucanía, Chile · ~5,6 kmd</p>
                </div>
            </div>
            <div class="contacto-formulario">
                <br>
                <h1>Envíanos un Mensaje</h1>
                <form id="formulario-contacto" action="/backend/formulario.php" method="post">
                    <label for="nombre">Nombre Apellido:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Perez" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Ej: juanperez@gmail.com" required>        
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" placeholder="Ingrese su mensaje aquí" required></textarea>
                    <button id="enviarButton" type="submit">Enviar</button>
                </form>
                <div id="respuesta"></div>
                
                <script src="js/Funciones.js"></script>
            <script>
                document.addEventListener("DOMContentLoaded", function () {
                    const formulario = document.getElementById("formulario-contacto");
                    const respuestaDiv = document.getElementById("respuesta");

                    formulario.addEventListener("submit", function (e) {
                        e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

                        const nombre = document.getElementById("nombre").value;
                        const email = document.getElementById("email").value;
                        const mensaje = document.getElementById("mensaje").value;

                        // Crea un objeto FormData para enviar los datos al servidor
                        const formData = new FormData();
                        formData.append("nombre", nombre);
                        formData.append("email", email);
                        formData.append("mensaje", mensaje);

                        // Realiza una solicitud utilizando fetch para enviar los datos al servidor
                        fetch("formulario.php", {
                            method: "POST",
                            body: formData,
                        })
                        .then(response => response.text())
                        .then(data => {
                            // Muestra la respuesta del servidor en la página
                            respuestaDiv.innerHTML = data;
                        })
                        .catch(error => {
                            console.error("Error:", error);
                        });
                    });
                });
            </script>
    </section>
</body>
</html>
