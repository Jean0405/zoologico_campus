import { Router } from "express";
//CONTROLLERS
import * as comentariosController from "../../controllers/comentariosController.js";
//MIDDLEWARES
import { validateSchema } from "../../helpers/validateSchema.js";
//ESQUEMAS
import { comentarioSchema } from "../../middlewares/comentarioSchema.js";

const v1Comentarios = Router();

v1Comentarios
  .get("/", comentariosController.getAllComments)
  .get("/:comentarioID", comentariosController.getCommentById)
  .get("/visitante/:visitanteID", comentariosController.getCommentByVisitorId)
  .get("/fecha/:fecha", comentariosController.getCommentByDate)
  .get("/populares/:nDias", comentariosController.getMostPopularAnimalsByDays)
  .post(
    "/",
    validateSchema(comentarioSchema),
    comentariosController.postNewComment
  );

export default v1Comentarios;
