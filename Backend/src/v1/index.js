import { Router } from "express";
import { validateToken as vaToken } from "../jwt/tokens.js";
import { validatePermissions as vaPermission } from "../helpers/validarPermisos.js";
import { limitUsuario, limitLogin } from "../helpers/limit.js";
import v1Animals from "./routes/animalesRoutes.js";
import v1Actividades from "./routes/actividadesRoutes.js";
import v1Empleados from "./routes/empleadosRoutes.js";
import v1Comentarios from "./routes/comentariosRoutes.js";
import v1Auth from "./routes/authRoutes.js";

const v1Routes = Router();

v1Routes
  .use("/auth", limitLogin(), v1Auth)
  .use("/animales", vaToken, limitUsuario(), vaPermission("animales"), v1Animals)
  .use("/actividades", vaToken,limitUsuario(), vaPermission("actividades"), v1Actividades)
  .use("/empleados", vaToken,limitUsuario(), vaPermission("empleados"), v1Empleados)
  .use("/comentarios",limitUsuario(), v1Comentarios);

export default v1Routes;
