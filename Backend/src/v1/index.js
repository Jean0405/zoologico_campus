import { Router } from "express";
import v1Animals from "./routes/animalesRoutes.js";
import v1Actividades from "./routes/actividadesRoutes.js";

const v1Routes = Router();

v1Routes.use("/animales", v1Animals);
v1Routes.use("/actividades", v1Actividades);

export default v1Routes;
