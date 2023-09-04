import { Router } from "express";
//CONTROLLERS
import * as actividadesController from "../../controllers/actividadesController.js";
// MIDDLEWARE VALIDADOR DE ESQUEMAS
import { validateSchema } from "../../helpers/validateSchema.js";
// ESQUEMAS
import { actividadSchema } from "../../middlewares/actividadSchema.js";

const v1Actividades = Router();

v1Actividades
  .get("/", actividadesController.getAllActivities)
  .get("/tipo/:tipoID", actividadesController.getActivitiesByType)
  .get("/fecha/:fecha", actividadesController.getActivitiesByDate)
  .get("/recinto/:recintoID", actividadesController.getActivityByClousure)
  .post(
    "/",
    validateSchema(actividadSchema),
    actividadesController.postNewActivity
  );

export default v1Actividades;
