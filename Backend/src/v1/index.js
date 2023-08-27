import { Router } from "express";
import v1Animals from "./routes/animalesRoutes.js";
import v1Actividades from "./routes/actividadesRoutes.js";
import v1Empleados from "./routes/empleadosRoutes.js";
import v1Comentarios from "./routes/comentariosRoutes.js";
import v1Auth from "./routes/authRoutes.js";

const v1Routes = Router();

v1Routes
  .use("/auth", v1Auth)
  .use("/animales", v1Animals)
  .use("/actividades", v1Actividades)
  .use("/empleados", v1Empleados)
  .use("/comentarios", v1Comentarios);

export default v1Routes;
