import { Router } from "express";
import v1Animals from "./routes/animalesRoutes.js";
import v1Actividades from "./routes/actividadesRoutes.js";
import v1Empleados from "./routes/empleadosRoutes.js";

const v1Routes = Router();

v1Routes
  .use("/animales", v1Animals)
  .use("/actividades", v1Actividades)
  .use("/empleados", v1Empleados);

export default v1Routes;
