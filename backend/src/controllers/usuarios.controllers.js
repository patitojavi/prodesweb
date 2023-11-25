import { pool } from '../config/bd.js'


// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT ID, Nombre, Apellido, Correo, Contraseña, rol FROM Usuario');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
}

// Obtener un usuario por su ID
export const getUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT ID, Nombre, Apellido, Correo, Contraseña, rol FROM Usuario WHERE ID = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({ message: "El usuario no existe" });
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ message: "Error al obtener el usuario" });
    }
}

// Crear un nuevo usuario
export const createUsuarios = async (req, res) => {
    try {
        const { ID, Nombre, Apellido, Correo, Contraseña, rol } = req.body;
        const [existingUsers] = await pool.query('SELECT * FROM Usuario WHERE Correo = ?', [Correo]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }
        const [rows] = await pool.query('INSERT INTO Usuario (ID, Nombre, Apellido, Correo, Contraseña, rol) VALUES (?,?,?,?,?,?)', [ID, Nombre, Apellido, Correo, Contraseña, rol]);
        res.send({ ID: rows.insertId, Nombre, Apellido, Correo, Contraseña, rol });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: "Error al crear el usuario" });
    }
}

// Eliminar un usuario por su ID
export const deleteUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('DELETE FROM Usuario WHERE ID = ?', [req.params.id]);
        if (rows.affectedRows <= 0) return res.status(404).json({ message: "El usuario no existe" });
        res.json({ message: "El usuario ha sido eliminado" });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ message: "Error al eliminar el usuario" });
    }
}

// Actualizar un usuario por su ID
export const updateUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Apellido, Correo, Contraseña, rol } = req.body;
        const [existingUsers] = await pool.query('SELECT * FROM Usuario WHERE ID = ?', [id]);
        if (existingUsers.length === 0) {
            return res.status(404).json({ message: "El usuario no existe" });
        }
        const [results] = await pool.query('UPDATE Usuario SET Nombre = IFNULL(?, Nombre), Apellido = IFNULL(?, Apellido), Correo = IFNULL(?, Correo), Contraseña = IFNULL(?, Contraseña), rol = IFNULL(?, rol) WHERE ID = ?', [Nombre, Apellido, Correo, Contraseña, rol, id]);
        const [rows] = await pool.query('SELECT ID, Nombre, Apellido, Correo, Contraseña, rol FROM Usuario WHERE ID = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }
}
