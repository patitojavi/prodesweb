import { Router } from "express";
import { getComentarios, getComentariosPorUsuario, createComentario, deleteComentario, updateComentario } from "../controllers/comentarios.controllers.js";

const router = Router();

router.get('/comentarios', getComentarios);
router.get('/comentarios/:userId', getComentariosPorUsuario);
router.post('/comentarios', createComentario);
router.put('/comentarios/:comentarioId', updateComentario);
router.delete('/comentarios/:comentarioId', deleteComentario);

export default router;
