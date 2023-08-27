import { Router } from "express";
import { validateToken as vaToken } from "../jwt/tokens.js";
import { validatePermissions as vaPermission } from "../helpers/validarPermisos.js";
import v1Animals from "./routes/animalesRoutes.js";
import v1Actividades from "./routes/actividadesRoutes.js";
import v1Empleados from "./routes/empleadosRoutes.js";
import v1Comentarios from "./routes/comentariosRoutes.js";
import v1Auth from "./routes/authRoutes.js";

const v1Routes = Router();

v1Routes
  .use("/auth", v1Auth)
  .use("/animales", vaToken, vaPermission("animales"), v1Animals)
  .use("/actividades", vaToken, vaPermission("actividades"), v1Actividades)
  .use("/empleados", vaToken, vaPermission("empleados"), v1Empleados)
  .use("/comentarios", v1Comentarios);

export default v1Routes;
