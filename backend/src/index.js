import express from "express";
import cors from "cors";
import userRoutes from "./routes/usuarios.routes.js";

import { PORT } from './config/config.js';
import comentariosRoutes from "./routes/comentarios.routes.js";


const app = express(); // Crear la instancia de la aplicación Express

// cors y express.json deben configurarse antes de definir las rutas
app.use(cors());

app.use(express.json());

// Definir las rutas
app.use('/api', userRoutes);
app.use('/api', comentariosRoutes);

// Endpoint para rutas no definidas
app.use((req, res) => {
	res.status(404).json({ message: "Endpoint not found" });
});

// Escuchar en el puerto PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
