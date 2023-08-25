import { Router } from "express";
import * as comentariosController from "../../controllers/comentariosController.js";

const v1Comentarios = Router();

v1Comentarios
  .get("/", comentariosController.getAllComments)
  .get("/:comentarioID", comentariosController.getCommentById)
  .get("/visitante/:visitanteID", comentariosController.getCommentByVisitorId)
  .get("/fecha/:fecha", comentariosController.getCommentByDate)
  .get("/populares/:nDias", comentariosController.getMostPopularAnimalsByDays)
  .post("/", comentariosController.postNewComment);

export default v1Comentarios;
