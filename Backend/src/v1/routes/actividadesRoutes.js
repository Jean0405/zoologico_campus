import { Router } from "express";
import * as actividadesController from "../../controllers/actividadesController.js";
const v1Actividades = Router();

v1Actividades
  .get("/", actividadesController.getAllActivities)
  .get("/tipoIdb/:tipoID", actividadesController.getActivitiesByType)
  .get("/fecha/:fecha", actividadesController.getActivitiesByDate)
  .get("/recinto/:recintoID", actividadesController.getActivityByClousure)
  .post("/", actividadesController.postNewActivity);

export default v1Actividades;
