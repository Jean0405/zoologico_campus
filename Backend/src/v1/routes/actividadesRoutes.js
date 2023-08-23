import { Router } from "express";
import * as animalesController from "../../controllers/actividadesController.js";
const v1Actividades = Router();

v1Actividades.get("/", animalesController.getAllActivities);

export default v1Actividades;
