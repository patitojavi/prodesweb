import { pool } from '../config/bd.js';

export const getComentarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Comentarios');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).json({ message: "Error al obtener los comentarios" });
    }
}

// Obtener los comentarios de un usuario específico
export const getComentariosPorUsuario = async (req, res) => {
    try {
        const { userId } = req.params;
        const [rows] = await pool.query('SELECT * FROM Comentarios WHERE UsuarioID = ?', [userId]);
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los comentarios del usuario:', error);
        res.status(500).json({ message: "Error al obtener los comentarios del usuario" });
    }
}

// Crear un nuevo comentario
export const createComentario = async (req, res) => {
    try {
        const { UsuarioID, Comentario } = req.body;
        const [rows] = await pool.query('INSERT INTO Comentarios (UsuarioID, Comentario) VALUES (?, ?)', [UsuarioID, Comentario]);
        res.send({ ID: rows.insertId, UsuarioID, Comentario });
    } catch (error) {
        console.error('Error al crear el comentario:', error);
        res.status(500).json({ message: "Error al crear el comentario" });
    }
}

// Eliminar un comentario por su ID
export const deleteComentario = async (req, res) => {
    try {
        const { comentarioId } = req.params;
        const [rows] = await pool.query('DELETE FROM Comentarios WHERE ID = ?', [comentarioId]);
        if (rows.affectedRows <= 0) return res.status(404).json({ message: "El comentario no existe" });
        res.json({ message: "El comentario ha sido eliminado" });
    } catch (error) {
        console.error('Error al eliminar el comentario:', error);
        res.status(500).json({ message: "Error al eliminar el comentario" });
    }
}

// Actualizar un comentario por su ID
export const updateComentario = async (req, res) => {
    try {
        const { comentarioId } = req.params;
        const { Comentario } = req.body;
        const [rows] = await pool.query('UPDATE Comentarios SET Comentario = ? WHERE ID = ?', [Comentario, comentarioId]);
        if (rows.affectedRows <= 0) return res.status(404).json({ message: "El comentario no existe" });
        res.json({ message: "El comentario ha sido actualizado" });
    } catch (error) {
        console.error('Error al actualizar el comentario:', error);
        res.status(500).json({ message: "Error al actualizar el comentario" });
    }
}

