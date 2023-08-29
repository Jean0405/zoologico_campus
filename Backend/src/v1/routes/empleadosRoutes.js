import { Router } from "express";
//CONTROLLERS
import * as empleadosController from "../../controllers/empleadosController.js";
//MIDDLEWARES
import { validateSchema } from "../../helpers/validateSchema.js";
//ESQUEMA
import { empleadoSchema } from "../../middlewares/empleadoSchema.js";

const v1Empleados = Router();

v1Empleados
  .get("/", empleadosController.getAllemployees)
  .get("/:empleadoID", empleadosController.getEmployeeById)
  .get("/cargo/:cargoNombre", empleadosController.getEmployeesByRole)
  .post(
    "/",
    validateSchema(empleadoSchema),
    empleadosController.postNewEmployee
  );

export default v1Empleados;
