import express from "express";
import cors from "cors";
import userRoutes from "./routes/usuarios.routes.js";
import rutasproducto from "./routes/productos.routes.js";
import cuentaRoutes from "./routes/cuenta.routes.js";
import { PORT } from './config/config.js';

const app = express(); // Crear la instancia de la aplicación Express

// cors y express.json deben configurarse antes de definir las rutas
app.use(cors({
	origin: 'http://127.0.0.1:5500',
	methods: 'GET,POST,PUT',
	credentials: true
}));

app.use(express.json());

// Definir las rutas
app.use('/api', userRoutes);
app.use('/api', rutasproducto);
app.use('/api', cuentaRoutes);

// Endpoint para rutas no definidas
app.use((req, res) => {
	res.status(404).json({ message: "Endpoint not found" });
});

// Escuchar en el puerto PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
