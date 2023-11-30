
import { Router } from "express";

import { getComentarios, getComentariosPorUsuario, createComentario, deleteComentario, updateComentario } from "../controllers/comentarios.controllers.js";

const router = Router();

router.get('/comentarios', getComentarios)
//const sql = 'SELECT * FROM comentarios'
router.get('/comentarios/:userId', getComentariosPorUsuario)
//const sql = 'SELECT * FROM comentarios WHERE usuarioId = ?'
router.post('/comentarios', createComentario)
//const sql = 'INSERT INTO comentarios SET ?'
router.put('/comentarios/:comentarioId', updateComentario)
//const sql = 'UPDATE comentarios SET ? WHERE id = ?'
router.delete('/comentarios/:comentarioId', deleteComentario)
//const sql = 'DELETE FROM comentarios WHERE id = ?'


export default router