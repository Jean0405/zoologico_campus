import { Router } from "express";
// CONTROLLERS
import * as animalesController from "../../controllers/animalesController.js";
//MIDDLEWARES
import { validateSchema } from "../../helpers/validateSchema.js";
//ESQUEMAS
import { animalSchema } from "../../middlewares/animalSchema.js";

const v1Animales = Router();

v1Animales
  .get("/", animalesController.getAllAnimals)
  .get("/recinto/:recintoID", animalesController.getAnimalsByEnclosure)
  .get("/especie/:especieID", animalesController.getAllAnimalsBySpecie)
  .get("/:animalID", animalesController.getAnimalById)
  .post("/", validateSchema(animalSchema), animalesController.postNewAnimal);

export default v1Animales;
