import { Router } from "express";
import * as empleadosController from "../../controllers/empleadosController.js";

const v1Empleados = Router();

v1Empleados
  .get("/", empleadosController.getAllemployees)
  .get("/:empleadoID", empleadosController.getEmployeeById)
  .get("/cargo/:cargoNombre", empleadosController.getEmployeesByRole);

export default v1Empleados;
