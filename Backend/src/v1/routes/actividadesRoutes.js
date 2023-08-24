import { Router } from "express";
import * as animalesController from "../../controllers/actividadesController.js";
const v1Actividades = Router();

v1Actividades
  .get("/", animalesController.getAllActivities)
  .get("/tipoIdb/:tipoID", animalesController.getActivitiesByType)
  .get("/fecha/:fecha", animalesController.getActivitiesByDate)
  .get("/recinto/:recintoID", animalesController.getActivityByClousure);

export default v1Actividades;
