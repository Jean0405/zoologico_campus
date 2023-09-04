import { Router } from "express";
//CONTROLLERS
import * as authController from "../../controllers/authsController.js";
//MIDDLEWARES
import { validateSchema } from "../../helpers/validateSchema.js";
//ESQUEMA
import { loginSchema } from "../../middlewares/authSchema.js";

const v1Auth = Router();

v1Auth.use("/login", validateSchema(loginSchema), authController.logIn);

export default v1Auth;
