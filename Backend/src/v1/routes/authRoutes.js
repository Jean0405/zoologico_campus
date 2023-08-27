import { Router } from "express";
import * as authController from "../../controllers/authsController.js";

const v1Auth = Router();

v1Auth.use("/login", authController.logIn);

export default v1Auth;
